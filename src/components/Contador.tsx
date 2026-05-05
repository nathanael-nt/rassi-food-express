import { Image, Pressable, Text, View } from "react-native";
import icons from "../constants/icons";

interface ContadorProps {
    quantidade: number;
    setQuantidade: React.Dispatch<React.SetStateAction<number>>;
}

export default function Contador({ quantidade, setQuantidade }: ContadorProps) {

    const handleIncrement = () => setQuantidade((valor) => valor + 1);

    const handleDecrement = () => setQuantidade((valor) => (valor > 1 ? valor - 1 : 1));

    return (
        <View className="items-center mt-5">
            <Text numberOfLines={1} className="text-2xl font-bold italic text-red-500">Quantidade</Text>
            <View className="flex-row items-center justify-center mt-5">
                <Pressable className="active:opacity-70 px-5" onPress={handleIncrement}>
                    <Image source={icons.mais} style={{ width: 42, height: 42 }} />
                </Pressable>
                <Text numberOfLines={1} className="text-3xl font-bold text-zinc-500">{quantidade}</Text>
                <Pressable className="active:opacity-70 px-5" onPress={handleDecrement}>
                    <Image source={icons.menos} style={{ width: 42, height: 42 }} />
                </Pressable>
            </View>
        </View>
    );
}