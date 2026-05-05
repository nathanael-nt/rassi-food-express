import Produto from '@/src/components/Produto';
import { imageAll } from '@/src/constants/data';
import icons from '@/src/constants/icons';
import { useLojaStore } from '@/src/store/useLojaStore';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, Platform, Pressable, ScrollView, Text, View } from "react-native";

export default function Cardapio() {

    const router = useRouter();

    const { id } = useLocalSearchParams();

    // Consome os dados do Zustand
    const { lojas, toggleFavorito } = useLojaStore();
    const loja = lojas.find((l: any) => String(l.id) === String(id));

    if (!loja) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text>Loja não encontrada...</Text>
            </View>
        );
    }

    const handlePress = () => {
        if (Platform.OS === 'web') {
            (document.activeElement as HTMLElement)?.blur();
        }
        router.back();  //router.navigate('/home')
    };

    const refLogo: any = imageAll;

    const valorTaxa = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(loja.taxa);

    const mensagensCategorias: { [key: number]: string } = {
        1: 'Não há ofertas disponíveis',
        2: 'Não há pedidos no momento',
        3: 'Nenhum combo encontrado',
        // Adicione novas categorias aqui facilmente
    };

    return (
        <View className="flex-1 items-center bg-white mx-8 mb-10">
            <View className="bg-white w-screen">
                <Image source={icons.banner4} style={{ width: '100%', height: 180 }} resizeMode='cover' />
                <Pressable className="active:opacity-70 pl-2 absolute" onPress={handlePress}>
                    <Image source={icons.back} style={{ width: 42, height: 42, top: 50, left: 15 }} />
                </Pressable>
            </View>
            <View className="flex-1 w-full mt-5">
                <View className="flex-row items-center bg-white">
                    <View className="rounded-2xl overflow-hidden">
                        <Image source={refLogo[loja.logotipo as string]} style={{ width: 82, height: 82 }} />
                    </View>
                    <View className='flex-1 pl-3'>
                        <Text numberOfLines={1} className="text-xl font-bold text-zinc-500">{loja.nome}</Text>
                        <Text numberOfLines={2} className="text-xl font-bold text-red-400">Taxa de entrega: {valorTaxa}</Text>
                    </View>
                    <Pressable className="active:opacity-70 pl-2" onPress={() => toggleFavorito(loja.id)}>
                        <View className="bg-white">
                            <Image source={(loja.status ? icons.favoritofull : icons.favorito)} style={{ width: 42, height: 42 }} />
                        </View>
                    </Pressable>
                </View>
                <View className="flex-row items-center bg-white mt-2 pl-5">
                    <View className="rounded-2xl overflow-hidden">
                        <Image source={icons.endereco} style={{ width: 45, height: 45, opacity: 0.3 }} resizeMode='contain' />
                    </View>
                    <View className='flex-1 pl-9'>
                        <Text numberOfLines={2} className="text-xl font-normal text-zinc-400">{loja.endereco}</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        loja.cardapio && loja.cardapio.length > 0 ? (
                            loja.cardapio.map((categoria: any) => {
                                return (
                                    <View key={categoria.idCategoria} className='mt-10'>
                                        <View className="h-[1px] w-full border-b mb-10 border-zinc-300" />
                                        <Text className="text-xl font-bold">{categoria.categoria}</Text>
                                        {
                                            categoria.itens && categoria.itens.length > 0 ? (
                                                categoria.itens.map((prod: any) => {
                                                    return (
                                                        <Produto
                                                            key={prod.idProduto}
                                                            lojaId={loja.id}
                                                            {...prod} />
                                                    );
                                                })
                                            ) : (
                                                <View className='items-center mt-12'>
                                                    <Text className="text-2xl text-zinc-500 italic">
                                                        {mensagensCategorias[categoria.idCategoria] || 'Nenhum item disponível nesta categoria.'}
                                                    </Text>
                                                </View>
                                            )
                                        }
                                    </View>
                                );
                            })
                        ) : (
                            <View className='items-center mt-32'>
                                <Text className="text-2xl text-green-600 font-normal italic">Nenhum produto encontrado</Text>
                            </View>
                        )
                    }
                </ScrollView>
            </View>
        </View >
    );
}