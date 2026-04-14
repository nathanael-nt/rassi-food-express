import Button from '@/src/components/Button';
import Contador from '@/src/components/Contador';
import icons from '@/src/constants/icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function Detalhes() {

    const router = useRouter();
    const params = useLocalSearchParams();

    // Se não houver parâmetros, você pode tratar um estado vazio
    if (!params.id) return <Text>Nenhum produto selecionada</Text>;

    const valorProd = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(+params.valor);

    return (
        <View className="flex-1 items-center bg-white mx-8 mb-10">
            <View className="bg-white w-screen">
                <Image source={icons.banner7} style={{ width: '100%', height: 180 }} resizeMode='cover' />
                <Pressable className="active:opacity-70 pl-2 absolute" onPress={() => router.back()}>
                    <Image source={icons.back} style={{ width: 42, height: 42, top: 50, left: 15 }} />
                </Pressable>
            </View>
            <View>
                <View className="mt-10 bg-white">
                    <Text numberOfLines={1} className="text-2xl font-bold text-zinc-500">{params.nome}</Text>
                    <Text numberOfLines={3} className="text-xl text-justify font-normal text-zinc-400">{params.descricao}</Text>
                </View>
                <View className="mt-5 mb-10 bg-white">
                    <Text numberOfLines={1} className="text-2xl font-bold text-zinc-500">{valorProd}</Text>
                </View>
                <Text className="text-xl font-bold text-zinc-500 ">Observações</Text>
                <TextInput className="text-2xl text-black font-normal align-top border-2 px-5 py-2 mt-3 border-zinc-300 rounded-md min-h-[200] bg-zinc-50"
                    multiline={true}
                    numberOfLines={5}
                    placeholder="Ex: Sem cebola, ponto da carne..."
                    placeholderTextColor="#d4d4d8"
                />
                <Contador />
            </View>
            <View className="flex-1 w-full justify-end mb-10 bg-white">
                <Button label="Adicionar" url=""></Button>
            </View>
        </View >
    );
}