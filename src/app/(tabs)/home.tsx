import Banners from "@/src/components/Banners";
import BoxInput from "@/src/components/BoxInput";
import Categorias from "@/src/components/Categorias";
import Lojas from "@/src/components/Lojas";
import { Text, View } from "react-native";
import { banners, categorias } from "../../constants/data";

export default function Home() {
    return (
        <View className="flex-1 mx-8 bg-white">
            <BoxInput placeholder="O que vai pedir hoje?" />
            <View className="mt-5 bg-white">
                <Categorias data={categorias} />
                <Banners data={banners} />
            </View>
            <View className="flex-1 bg-white mt-5">
                <Text className="text-xl font-bold">
                    Destaques
                </Text>
                <Lojas />
            </View>
        </View >
    );
}