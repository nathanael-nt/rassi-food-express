import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, View } from "react-native";

export default function Tools() {

    const key = '@App:lojas';

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem(key);
            alert("Dados apagados do asyncStorage.");
        } catch (e) {
            console.error('Erro ao carregar dados:', e);
        }
    };

    return (
        <View className=" w-full">
            <Button title='Limpar asyncStorage' onPress={() => removeData()} />
        </View>
    );
}