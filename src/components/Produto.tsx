import { useRouter } from "expo-router";
import { Image, Platform, Pressable, Text, View } from "react-native";
import { imageAll } from "../constants/data";

interface ProdutoProps {
    idProduto: number
    nome: string
    descricao: string
    valor: number
    foto: string
    onPress?: () => void
}

export default function Produto(props: ProdutoProps) {

    const router = useRouter();

        const handlePress = () => {
            if (Platform.OS === 'web') {
                (document.activeElement as HTMLElement)?.blur();
            }
            router.push({
                pathname: '../detalhes',
                params: {
                    id: props.idProduto,
                    nome: props.nome,
                    descricao: props.descricao,
                    valor: props.valor
                }
            });
        };

    const refProd: any = imageAll;

    const valorProd = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(props.valor);

    return (
        <Pressable className="flex-row active:opacity-70 pt-5" onPress={() => handlePress()}>
            <View className="rounded-2xl overflow-hidden">
                <Image source={refProd[props.foto]} style={{ width: 82, height: 82 }} resizeMode="cover" />
            </View>
            <View className="flex-1 pl-5 justify-center bg-white">
                <Text numberOfLines={1} className="text-xl font-bold text-zinc-500">{props.nome}</Text>
                <Text numberOfLines={2} className="text-xl font-normal text-zinc-400">{props.descricao}</Text>
            </View>
            <Text className="text-lg font-bold text-green-600 mt-1">{valorProd}</Text>
        </Pressable >
    );
}