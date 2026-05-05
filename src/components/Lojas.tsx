import { useRouter } from "expo-router";
import { Image, Platform, Pressable, ScrollView, Text, View } from "react-native";
import { imageAll } from '../constants/data';
import icons from "../constants/icons";
import { useLojaStore } from '../store/useLojaStore';

interface LojasProps {
    somenteFavoritos?: boolean;
}

export default function Lojas({ somenteFavoritos = false }: LojasProps) {

    const { lojas, toggleFavorito } = useLojaStore();

    const router = useRouter();

    const handlePress = (loja: any) => {
        if (Platform.OS === 'web') {
            (document.activeElement as HTMLElement)?.blur();
        }
        
        router.push({ pathname: '../cardapio', params: { id: loja.id } });
    };

    const refLogo: any = imageAll

    const dadosFiltrados = somenteFavoritos
        ? (lojas ?? []).filter(item => item.status)
        : (lojas ?? []);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}>
            {
                dadosFiltrados.length === 0 ? (
                    <View className="flex-1 items-center justify-center bg-white">
                        <Text className="text-2xl text-zinc-500 italic">
                            {somenteFavoritos ? "Não há favoritos" : "Nenhuma loja disponível"}
                        </Text>
                    </View>
                ) : (
                    dadosFiltrados.map((value: any, index: number) => {
                        return (
                            <View key={value.id || index} className="flex-row items-center pt-3 bg-white">
                                <Pressable className="flex-1 flex-row items-center pt-5 bg-white active:opacity-70" onPress={() => handlePress(value)}>
                                    <View className="rounded-2xl overflow-hidden">
                                        <Image source={refLogo[value.logotipo]} style={{ width: 82, height: 82 }} />
                                    </View>
                                    <View className='flex-1 pl-2 mr-3'>
                                        <Text numberOfLines={1} className="text-xl font-bold text-zinc-500">{value.nome}</Text>
                                        <Text numberOfLines={2} className="text-xl font-normal text-zinc-400">{value.endereco}</Text>
                                    </View>
                                </Pressable>
                                <Pressable className="active:opacity-70 pl-2" onPress={() => toggleFavorito(value.id)}>
                                    <View className="bg-white">
                                        <Image source={(value.status ? icons.favoritofull : icons.favorito)} style={{ width: 42, height: 42 }} />
                                    </View>
                                </Pressable>
                            </View>
                        );
                    })
                )}
        </ScrollView>
    );
}