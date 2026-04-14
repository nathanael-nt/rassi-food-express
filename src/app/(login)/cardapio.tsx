import Produto from '@/src/components/Produto';
import { imageAll } from '@/src/constants/data';
import icons from '@/src/constants/icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Cardapio() {

    const router = useRouter();
    const params = useLocalSearchParams();

    const cardapio = params.cardapio ? JSON.parse(params.cardapio as string) : [];
    // console.log(cardapio[1]);
    // console.log(cardapio.length);
    const refLogo: any = imageAll;

    const key = '@App:lojas';

    const valorTaxa = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(+params.taxa);

    const [isFavorito, setIsFavorito] = useState(params.status === "true");

    // Se não houver parâmetros, você pode tratar um estado vazio
    if (!params.id) return <Text>Nenhuma loja selecionada</Text>;

    const toggleFavorito = async () => {
        try {
            const novoStatus = !isFavorito;

            setIsFavorito(novoStatus);

            // Busca a lista completa de lojas no Storage
            const dataStore = await AsyncStorage.getItem(key);

            if (dataStore) {
                const lojas = JSON.parse(dataStore);

                const idBuscado = Number(params.id);

                // Mapeamos o array e alteramos apenas a loja específica
                const novasLojas = lojas.map((loja: any) => {
                    if (loja.id === idBuscado) {
                        return { ...loja, status: novoStatus };
                    }
                    return loja;
                });

                // Salva a lista atualizada de volta no Storage
                await AsyncStorage.setItem(key, JSON.stringify(novasLojas));
            }
        } catch (e) {
            console.error("Erro ao salvar favorito:", e);
        }
    };

    return (
        <View className="flex-1 items-center bg-white mx-8 mb-10">
            <View className="bg-white w-screen">
                <Image source={icons.banner4} style={{ width: '100%', height: 180 }} resizeMode='cover' />
                <Pressable className="active:opacity-70 pl-2 absolute" onPress={() => router.back()}>
                    <Image source={icons.back} style={{ width: 42, height: 42, top: 50, left: 15 }} />
                </Pressable>
            </View>
            <View className="flex-1 w-full mt-5">
                <View className="flex-row items-center bg-white">
                    {/* <Pressable className="flex-1 flex-row items-center bg-white active:opacity-70"> */}
                        <View className="rounded-2xl overflow-hidden">
                            <Image source={refLogo[params.logotipo as string]} style={{ width: 82, height: 82 }} />
                        </View>
                        <View className='flex-1 pl-3'>
                            <Text numberOfLines={1} className="text-xl font-bold text-zinc-500">{params.nome}</Text>
                            <Text numberOfLines={2} className="text-xl font-normal text-zinc-400">Taxa de entrega: {valorTaxa}</Text>
                        </View>
                    {/* </Pressable> */}
                    <Pressable className="active:opacity-70 pl-2" onPress={toggleFavorito}>
                        <View className="bg-white">
                            <Image source={(isFavorito ? icons.favoritofull : icons.favorito)} style={{ width: 42, height: 42 }} />
                        </View>
                    </Pressable>
                </View>
                <View className="flex-row items-center bg-white mt-2 pl-5">
                    <View className="rounded-2xl overflow-hidden">
                        <Image source={icons.endereco} style={{ width: 45, height: 45, opacity: 0.3 }} resizeMode='contain' />
                    </View>
                    <View className='flex-1 pl-9'>
                        <Text numberOfLines={2} className="text-xl font-normal text-zinc-400">{params.endereco}</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        cardapio.length > 0 ? (cardapio.map((item: any) => {
                            return (
                                <View key={item.idCategoria} className='mt-10'>
                                    <View className="h-[1px] w-full border-b mb-10 border-zinc-300" />
                                    <Text className="text-xl font-bold">{item.categoria}</Text>
                                    {
                                        item.itens.map((prod: any) => {
                                            return (
                                                <Produto key={prod.idProduto}
                                                    idProduto={prod.idProduto}
                                                    nome={prod.nome}
                                                    descricao={prod.descricao}
                                                    valor={prod.valor}
                                                    foto={prod.foto} />
                                            );
                                        })
                                    }
                                </View>
                            );
                        }))
                            : (<View className='items-center mt-32'>
                                <Text className="text-2xl text-green-600 font-normal italic">Nenhum produto encontrado</Text>
                            </View>
                            )
                    }
                </ScrollView>
            </View>
        </View >
    );
}