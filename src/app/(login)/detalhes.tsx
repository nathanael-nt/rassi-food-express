import Button from "@/src/components/Button";
import { imageAll } from "@/src/constants/data";
import icons from "@/src/constants/icons";
import { useLojaStore } from "@/src/store/useLojaStore";
import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { Image, Text, View } from "react-native";


export default function Detalhes() {

    const { idLoja, idProduto, quantidade } = useLocalSearchParams();

    // Consome os dados do Zustand
    const { lojas } = useLojaStore();

    // Busca a loja e depois o produto
    const produto = useMemo(() => {

        if (!idLoja || !idProduto) return null;

        const loja = lojas.find((l: any) => String(l.id) === String(idLoja));

        if (!loja) return null;

        // Pega todos os itens de todas as categorias da loja
        const todosOsItens = loja.cardapio.flatMap((cat: any) => cat.itens || []);
        return todosOsItens.find((p: any) => String(p.idProduto) === String(idProduto)) || null;
    }, [lojas, idLoja, idProduto]);

    if (!produto) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text>Loja ou produto não encontrado...</Text>
            </View>
        );
    }

    const refProd: any = imageAll;

    const qtd = Number(quantidade) || 1;
    const total = produto.valor * qtd;
    const valorProd = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(total);

    return (
        <View className="flex-1 bg-white pt-5 mx-8">
            <Text className="text-xl text-center font-bold">Meu Pedido</Text>
            <View className="flex-row items-center mt-10 bg-white">
                <Image source={refProd[produto.foto as string]} style={{ width: 82, height: 82, borderRadius: 50, backgroundColor: '#f59e0b' }} resizeMode="cover" />
                <View className="flex-1 pl-5 bg-white">
                    <Text numberOfLines={1} className="text-xl font-bold text-zinc-500">{qtd} x {produto.nome}</Text>
                    <Text numberOfLines={1} className="text-xl text-justify font-normal text-zinc-400">{produto.descricao}</Text>
                </View>
                <View className="pl-5 bg-white items-center gap-2">
                    <Text numberOfLines={1} className="text-xl font-bold">{valorProd}</Text>
                    <Image source={icons.lixeira} style={{ width: 32, height: 32 }} />
                </View>
            </View>
            <View className="h-[1px] w-full border-b pb-5 border-zinc-500" />
            <View className="flex-1 justify-end mb-10 px-5 py-5 gap-2 bg-white">
                <Text className="text-xl font-bold">Resumo do Pedido</Text>
                <Text className="text-xl font-normal">Subtotal</Text>
                <Text className="text-xl font-normal">Taxa Ent.</Text>
                <Text className="text-xl font-bold text-red-500">Total: {valorProd}</Text>
            </View>
            <View className="justify-end mb-20 bg-white">
                <Button label="Finalizar Pedido" url=""></Button>
            </View>
        </View>
    );
}