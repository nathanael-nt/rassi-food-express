import UpdPerfil from "@/src/components/UpdPerfil";
import { loadUserStore } from "@/src/store/loadUserStore";
import { useRouter } from "expo-router";
import { Alert, Platform, Pressable, Text, View } from "react-native";
import Tools from "../../services/tools";

export default function Perfil() {

    const router = useRouter();

    const handlePress = () => {

        if (Platform.OS === 'web') {
            if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
            }
        }

        const users = loadUserStore.getState().users;
        const usuarioLogado = users.find((u: any) => u.status === true);

        if (usuarioLogado) {

            loadUserStore.getState().toggleUsers(usuarioLogado.id);

            const usersAtualizado = loadUserStore.getState().users;
            const usuarioDesconectado = usersAtualizado.find((u: any) => u.id === usuarioLogado.id);

            if (__DEV__ && usuarioDesconectado) {
                console.log("============= Usuário Desconectado ==============");
                console.log(`id: ${usuarioDesconectado.id} | Email: ${usuarioDesconectado.email} | Status: ${usuarioDesconectado.status}`);
                console.log("=================================================");
            }
        }

        const removeUsers = async () => {
            try {
                // Limpa o AsyncStorage
                await loadUserStore.persist.clearStorage();

                // Reseta o estado em memória (força a atualização da UI)
                loadUserStore.getState().reset();

                Alert.alert("LogOff", "Usuário desconectado.");
            } catch (e) {
                console.error('Erro ao desconectar usuário:', e);
                Alert.alert("Erro", "Não foi possível desconectar usuário.");
            }
        };

        removeUsers();

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