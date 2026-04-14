import UpdPerfil from "@/src/components/UpdPerfil";
import Tools from "@/src/services/tools";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";;

export default function Perfil() {

    const router = useRouter();

    return (
        <View className="flex-1 mx-8 mt-5 bg-white">
            <Text className="text-xl text-center font-bold">
                Perfil
            </Text>
            <Pressable className="active:opacity-70">
                <UpdPerfil titulo="Endereço" subtitulo="Meu endereço de entrega" icone01="endereco" icone02="expandir" linhaSuperior />
            </Pressable>
            <Pressable className="active:opacity-70">
                <UpdPerfil titulo="Meus dados" subtitulo="Informações da conta" icone01="dados" icone02="expandir" />
            </Pressable>
            <Pressable className="active:opacity-70" onPress={() => router.push("/")}>
                <UpdPerfil titulo="Desconectar" subtitulo="Desconectar do aparelho" icone01="logout" icone02="expandir" />
            </Pressable>
            <View className="flex-1 justify-end w-full mb-28">
                <Tools />
            </View>
        </View>
    );
}