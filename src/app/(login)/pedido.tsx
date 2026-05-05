import Button from '@/src/components/Button';
import Contador from '@/src/components/Contador';
import { imageAll } from '@/src/constants/data';
import icons from '@/src/constants/icons';
import { useLojaStore } from '@/src/store/useLojaStore';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function Pedido() {

    const router = useRouter();

    const [quantidade, setQuantidade] = useState(1);

    const { idLoja, idProduto } = useLocalSearchParams();

    // Consome os dados do Zustand
    const { lojas } = useLojaStore();

    // Busca a loja e depois o produto
    const produto = useMemo(() => {

        if (!idLoja || !idProduto) return null;

        const loja = lojas.find((l: any) => String(l.id) === String(idLoja));

        if (!loja) {
            return (
                <View className="flex-1 items-center justify-center">
                    <Text>Loja não encontrada...</Text>
                </View>
            );
        }
        // Pega todos os itens de todas as categorias da loja
        const todosOsItens = loja.cardapio.flatMap((cat: any) => cat.itens || []);
        return todosOsItens.find((p: any) => String(p.idProduto) === String(idProduto));
    }, [lojas, idLoja, idProduto]);

    if (!produto) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text>Produto não encontrado...</Text>
            </View>
        );
    }

    const total = produto.valor * quantidade; //.toFixed(2).replace('.', ',')

    const valorProd = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(total);

    const refProd: any = imageAll;

    return (
        <View className="flex-1 items-center bg-white mx-8 mb-10">
            <View className="bg-white w-screen">
                <Image source={icons.banner7} style={{ width: '100%', height: 180 }} resizeMode='cover' />
                <Pressable className="active:opacity-70 pl-2 absolute" onPress={() => router.back()}>
                    <Image source={icons.back} style={{ width: 42, height: 42, top: 50, left: 15 }} />
                </Pressable>
            </View>
            <View>
                <View className="flex-row items-center mt-10 bg-white">
                    <Image source={refProd[produto.foto as string]} style={{ width: 82, height: 82, borderRadius: 50, backgroundColor: '#f59e0b' }} resizeMode="cover" />
                    <View className="flex-1 pl-5">
                        <Text numberOfLines={1} className="text-2xl font-bold text-zinc-500">{produto.nome}</Text>
                        <Text numberOfLines={2} className="text-xl text-justify font-normal text-zinc-400">{produto.descricao}</Text>
                    </View>
                </View>
                <View className="mt-5 mb-10 bg-white">
                    <Text numberOfLines={1} className="text-2xl font-bold text-red-500">{valorProd}</Text>
                </View>
                <Text className="text-xl font-bold text-zinc-500 ">Observações</Text>
                <TextInput className="text-2xl text-black font-normal align-top border-2 px-5 py-2 mt-3 border-zinc-300 rounded-md min-h-[180] bg-zinc-50"
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Ex: Sem cebola, ponto da carne..."
                    placeholderTextColor="#d4d4d8"
                />
                <Contador quantidade={quantidade} setQuantidade={setQuantidade} />
            </View>
            <View className="flex-1 w-full justify-end mb-10 bg-white">
                <Button label="Adicionar" url="./detalhes"></Button>
            </View>
        </View >
    );
}