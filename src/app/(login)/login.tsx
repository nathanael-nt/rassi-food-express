import BoxInput from "@/src/components/BoxInput";
import Button from "@/src/components/Button";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Login() {

    const router = useRouter();

    return (
        <View className="flex-1 items-center bg-white mx-8 pt-10">
            <Text className="text-2xl font-normal">
                Acesse sua conta
            </Text>
            <View className=" w-full pt-40 mb-10">
                <BoxInput label="E-mail" placeholder="Digite seu melhor e-mail" />
                <BoxInput label="Senha" placeholder="Digite uma senha segura" isPassword />
            </View>
            <View className=" w-full pt-10 mb-28">
                <Button label="Acessar" url="../home"></Button>
            </View>
            <TouchableOpacity onPress={() => router.navigate('./register')}>
                <Text className="text-2xl font-normal">
                    Criar minha conta
                </Text>
            </TouchableOpacity>
        </View>
    );
}