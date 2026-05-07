import BoxInput from "@/src/components/BoxInput";
import Button from "@/src/components/Button";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from "react-native";

export default function Login() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlePress = () => {
        if (Platform.OS === 'web') {
            (document.activeElement as HTMLElement)?.blur();
        }
        router.navigate('/register');
    };

    function ProcessarLogin() {

        Keyboard.dismiss();

        if (!email.trim() || !password.trim()) {
            const titulo = "E-mail ou senha vazios";
            const mensagem = "Por favor, preencha o e-mail e a senha para continuar.";

            if (Platform.OS === 'web') {
                window.alert(`${titulo}: ${mensagem}`);
            } else {
                Alert.alert(titulo, mensagem, [{ text: "OK" }]);
            }

            return;
        }

        if (__DEV__) {
            console.log(email)
            console.log(password)
        }

        router.navigate('/home');

    }
    return (
        <KeyboardAvoidingView
            behavior="padding"
            className="flex-1 bg-white"
            keyboardVerticalOffset={64}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                className="mx-8 pt-10"
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View className="items-center bg-white">
                    <Text className="text-2xl font-normal">
                        Acesse sua conta
                    </Text>
                </View>
                <View className=" w-full pt-10 mb-5">
                    <BoxInput
                        label="E-mail"
                        placeholder="Digite seu melhor e-mail"
                        onChangeText={setEmail}  //onChangeText={(value) => setEmail(value)}
                        value={email}
                    />
                    <BoxInput
                        label="Senha"
                        placeholder="Digite uma senha segura"
                        isPassword
                        onChangeText={setPassword} //onChangeText={(value) => setPassword(value)}
                        value={password}
                    />
                </View>
                <View className="flex-1 justify-center mb-10">
                    <Button
                        label="Acessar"
                        funcao={ProcessarLogin} 
                    />
                </View>
                <Pressable
                    onPress={handlePress}
                    className="active:opacity-70 items-center mb-36">
                    <Text className="text-xl font-normal text-blue-600">
                        Criar minha conta
                    </Text>
                </Pressable>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}