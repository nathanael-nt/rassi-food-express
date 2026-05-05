import Lojas from "@/src/components/Lojas";
import { Text, View } from "react-native";


export default function Detalhes() {
    return (
        <View className="flex-1 items-center bg-white mx-8">
            <View className="w-full mt-5">
                <Text className="text-xl text-center font-bold">
                    Meu Pedido
                </Text>
            </View>
            <View className="flex-1 w-full mt-10">
                <Lojas />
            </View>
        </View>
    );
}