
import Banners from "@/src/components/Banners";
import BoxInput from "@/src/components/BoxInput";
import Categorias from "@/src/components/Categorias";
import { Text, View } from "react-native";
import {banners, categorias, lojas } from "../../constants/data.js";
import Lojas from "@/src/components/Lojas";


export default function Home() {
    return (
        <View className="flex-1 mx-8 bg-white">
            <BoxInput placeholder="O que vai pedir hoje?" />
            <View className="mt-5 bg-white">
                <Categorias data={categorias} />
                <Banners data={banners} />
            </View>
            <Text className="text-xl font-bold">
                Destaques
            </Text>
            <View className="flex-1 bg-white">
                <Lojas data={lojas} />
            </View>
        </View >
    );
}