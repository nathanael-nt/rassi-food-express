import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { imageLogo } from '../constants/data';
import icons from "../constants/icons";

interface LojasProps {
    data: {
        id: number;
        status: boolean
        nome: string;
        endereco: string;
        logotipo: any;
    }[]
}

export default function Lojas(props: LojasProps) {

    const refLogo: any = imageLogo

    const [dadosLojas, setLojas] = useState(null);

    const key = '@App:loja';

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
                        <View key={index} className="flex-row items-center justify-between pt-3 gap-4 bg-white">
                            <View key={index} className="w-[80%] flex-row items-center pt-5 gap-4 bg-white">
                                <Pressable className="active:opacity-70">
                                    <View className="rounded-2xl overflow-hidden items-center">
                                        <Image source={refLogo[value.logotipo]} style={{ width: 82, height: 82 }} />
                                    </View>
                                </Pressable>
                                <View>
                                    <Text numberOfLines={2} className="w-[95%] text-xl font-bold text-zinc-400">{value.nome}</Text>
                                    <Text numberOfLines={2} className="w-[95%] text-xl font-normal text-zinc-400">{value.endereco}</Text>
                                </View>
                            </View>
                            <View className="w-[20%]">
                                <Pressable className="active:opacity-70" onPress={() => setFavorito(+(index))}>
                                    <View className="rounded-2xl overflow-hidden">
                                        <Image source={(value.status ? icons.favoritofull : icons.favorito)} style={{ width: 52, height: 52 }} />
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                    );
                })
            }
        </ScrollView>
    );
}