import Button from "@/src/components/Button";
import UpdPerfil from "@/src/components/UpdPerfil";
import { Text, View } from "react-native";

export default function Perfil() {
    return (
        <View className="flex-1 mx-8 mt-5 bg-white">
            <Text className="text-xl text-center font-bold">
                Perfil
            </Text>
            <UpdPerfil titulo="Endereço" subtitulo="Meu endereço de entrega" icone01="endereco" icone02="expandir" linhaSuperior />
            <UpdPerfil titulo="Meus dados" subtitulo="Informações da conta" icone01="dados" icone02="expandir" />
            <UpdPerfil titulo="Desconectar" subtitulo="Desconectar do aparelho" icone01="logout" icone02="expandir" />
            <View className=" w-full mt-14">
                <Button label="Home" url="../"></Button>
            </View>
        </View>
    );
}