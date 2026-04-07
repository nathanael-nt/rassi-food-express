import Lojas from "@/src/components/Lojas";
import { Text, View } from "react-native";
import { lojas } from "../../constants/data.js";


export default function Favorito() {
    return (
        <View className="flex-1 items-center bg-white mx-8">
            <View className="w-full mt-5">
                <Text className="text-xl text-center font-bold">
                    Favoritos
                </Text>
            </View>
            <View className="flex-1 w-full mt-10">
                <Lojas data={lojas} />
            </View>
        </View>
    );
}