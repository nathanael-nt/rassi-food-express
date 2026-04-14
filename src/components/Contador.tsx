import { Image, Pressable, Text, View } from "react-native";
import icons from "../constants/icons";

export default function Contador() {

    return (
        <View className="flex-row items-center justify-center mt-10">
            <Pressable className="active:opacity-70 px-5">
                <Image source={icons.mais} style={{ width: 42, height: 42 }} />
            </Pressable>
            <Text numberOfLines={1} className="text-3xl font-bold text-zinc-500">1</Text>
            <Pressable className="active:opacity-70 px-5">
                <Image source={icons.menos} style={{ width: 42, height: 42 }} />
            </Pressable>
        </View>
    );
}