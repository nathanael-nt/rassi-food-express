import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { lojas } from '../constants/data';
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
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                lojas.map((value: any, index: number) => {
                    return (
                        <View key={index} className="flex-row items-center justify-between pt-5 gap-4 bg-white">
                            <View key={index} className="w-[80%] flex-row items-center pt-5 gap-4 bg-white">
                                <TouchableOpacity>
                                    <View className="rounded-2xl overflow-hidden items-center">
                                        <Image source={value.logotipo} style={{ width: 82, height: 82 }} />
                                    </View>
                                </TouchableOpacity>
                                <View>
                                    <Text numberOfLines={2} className="w-[95%] text-xl font-bold text-zinc-400">{value.nome}</Text>
                                    <Text numberOfLines={2} className="w-[95%] text-xl font-normal text-zinc-400">{value.endereco}</Text>
                                </View>
                            </View>
                            <View className="w-[20%]">
                                <TouchableOpacity >
                                    <View className="rounded-2xl overflow-hidden">
                                        <Image source={(value.status ? icons.favorito : icons.favoritofull)} style={{ width: 52, height: 52 }} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })
            }
        </ScrollView>
    );
}