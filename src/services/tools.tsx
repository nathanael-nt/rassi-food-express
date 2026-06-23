import { Alert, Button, View } from "react-native";
import { loadUserStore } from "../store/loadUserStore";
import { useLojaStore } from "../store/useLojaStore";

export default function Tools() {

    const removeData = async () => {
        try {
            // Limpa o AsyncStorage
            await useLojaStore.persist.clearStorage();

            // Reseta o estado em memória (força a atualização da UI)
            useLojaStore.getState().reset();

            Alert.alert("Sucesso", "Dados apagados e store resetado.");
        } catch (e) {
            console.error('Erro ao limpar dados:', e);
            Alert.alert("Erro", "Não foi possível limpar os dados.");
        }
    };

    const removeUsers = async () => {
        try {
            // Limpa o AsyncStorage
            await loadUserStore.persist.clearStorage();

            // Reseta o estado em memória (força a atualização da UI)
            loadUserStore.getState().reset();

            Alert.alert("Sucesso", "Usuários apagados e store resetado.");
        } catch (e) {
            console.error('Erro ao apagar usuários:', e);
            Alert.alert("Erro", "Não foi possível apagar usuários.");
        }
    };

    return (
        <View className="w-full gap-3">
            <Button title='Limpar Data asyncStorage' onPress={() => removeData()} />
            <Button title='Limpar Users asyncStorage' onPress={() => removeUsers()} />
        </View>
    );
}