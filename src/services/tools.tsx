import { Alert, Button, View } from "react-native";
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

    return (
        <View className="w-full">
            <Button title='Limpar asyncStorage' onPress={() => removeData()} />
        </View>
    );
}