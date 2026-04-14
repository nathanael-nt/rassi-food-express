import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Image, Platform, Pressable, ScrollView, Text, View } from "react-native";
import { imageAll } from '../constants/data';
import icons from "../constants/icons";

interface LojasProps {
    data: {
        id: number;
        status: boolean;
        nome: string;
        endereco: string;
        logotipo: any;
        taxa: number;
        cardapio: any[]
    }[]
}

export default function Lojas(props: LojasProps) {

    const router = useRouter();

    const handlePress = (loja: any) => {
        if (Platform.OS === 'web') {
            (document.activeElement as HTMLElement)?.blur();
        }
        router.push({
            pathname: '../cardapio',
            params: {
                id: loja.id,
                status: loja.status,
                nome: loja.nome,
                endereco: loja.endereco,
                logotipo: loja.logotipo,
                taxa: loja.taxa,
                cardapio: JSON.stringify(loja.cardapio)
                // Adicione outros campos se necessário
            }
        });
    };

    const refLogo: any = imageAll

    const [dadosLojas, setLojas] = useState(null);

    const key = '@App:lojas';

    const { data } = props;

    useFocusEffect(
        useCallback(() => {
            getLojas(data)
        }, [data])
    );

    const getLojas = async (value: object) => {
        try {
            // console.log(value)
            let storeLojas = await AsyncStorage.getItem(key);
            if (storeLojas !== null) {
                setLojas(JSON.parse(storeLojas));
                // console.log(dadosLojas)
                // console.log(storeLojas)
            } else {
                storeLojas = JSON.stringify(value);
                // console.log(JSON.parse(storeLojas))
                await AsyncStorage.setItem(key, storeLojas);
                setLojas(JSON.parse(storeLojas));
                // console.log(dadosLojas)
            }
        } catch (e) {
            console.error('Erro ao atualizar dados:', e);
        }
    }

    const setFavorito = async (id: number) => {
        const dataStore = await AsyncStorage.getItem(key);
        try {
            if (dataStore !== null) {
                // alert(`Cheguei em setFavorito`);
                const newObj = await JSON.parse(dataStore);
                if (newObj[id].status === true) {
                    newObj[id].status = false;
                } else {
                    newObj[id].status = true;
                }
                // console.log(newObj)
                setLojas(newObj);
                await AsyncStorage.setItem(key, JSON.stringify(newObj));
            } else {
                alert(`Não foi localizado dados: ${dataStore}`);
            }
        } catch (e) {
            alert(`Dados não encontrado.`);
            console.error('Erro ao carregar dados:', e);
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                (dadosLojas ?? []).map((value: any, index: number) => {
                    return (
                        <View key={index} className="flex-row items-center pt-3 bg-white">
                            <Pressable className="flex-1 flex-row items-center pt-5 bg-white active:opacity-70" onPress={() => handlePress(value)}>
                                <View className="rounded-2xl overflow-hidden">
                                    <Image source={refLogo[value.logotipo]} style={{ width: 82, height: 82 }} />
                                </View>
                                <View className='flex-1 pl-2 mr-3'>
                                    <Text numberOfLines={1} className="text-xl font-bold text-zinc-500">{value.nome}</Text>
                                    <Text numberOfLines={2} className="text-xl font-normal text-zinc-400">{value.endereco}</Text>
                                </View>
                            </Pressable>
                            <Pressable className="active:opacity-70 pl-2" onPress={() => setFavorito(+(index))}>
                                <View className="bg-white">
                                    <Image source={(value.status ? icons.favoritofull : icons.favorito)} style={{ width: 42, height: 42 }} />
                                </View>
                            </Pressable>
                        </View>
                    );
                })
            }
        </ScrollView>
    );
}