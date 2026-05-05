import UpdPerfil from "@/src/components/UpdPerfil";
import { useRouter } from "expo-router";
import { Platform, Pressable, Text, View } from "react-native";
import Tools from "../../services/tools";

export default function Perfil() {

    const router = useRouter();

    const handlePress = () => {

        if (Platform.OS === 'web') {
            if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
            }
        }

        router.push("/");
    };

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
            <Pressable className="active:opacity-70" onPress={handlePress}>
                <UpdPerfil titulo="Desconectar" subtitulo="Desconectar do aparelho" icone01="logout" icone02="expandir" />
            </Pressable>
            <View className="flex-1 justify-end w-full mb-28">
                <Tools />
            </View>
        </View>
    );
}