import BoxInput from "@/src/components/BoxInput";
import Button from "@/src/components/Button";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";

export default function Register() {

    const router = useRouter();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [whats, setWhats] = useState("");
    const [passwdone, setPasswdone] = useState("");
    const [passwdtwo, setPasswdtwo] = useState("");

    function ProcessarRegister() {

        Keyboard.dismiss();

        if (!nome.trim() || !email.trim() || !whats.trim() || !passwdone.trim() || !passwdtwo.trim()) {
            const titulo = "Campos vazios";
            const mensagem = "Por favor, preencha todos os campos para continuar.";

            if (Platform.OS === 'web') {
                window.alert(`${titulo}: ${mensagem}`);
            } else {
                Alert.alert(titulo, mensagem, [{ text: "OK" }]);
            }

            return;
        }

        if (passwdone !== passwdtwo) {
            validaSenhas("Senhas diferentes", "As senhas digitadas não conferem uma com a outra.");
            return;
        }

        if (__DEV__) {
            console.log({ nome, email, whats, passwdone });
        }

        router.navigate('/address');

    }

    function validaSenhas(titulo: string, mensagem: string) {
        if (Platform.OS === 'web') {
            window.alert(`${titulo}: ${mensagem}`);
        } else {
            Alert.alert(titulo, mensagem, [{ text: "OK" }]);
        }
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
                <Text className="text-2xl font-normal">
                    Criar sua conta
                </Text>
                <View className=" w-full pt-5 mb-10">
                    <BoxInput label="Nome Completo" placeholder="Digite seu nome" onChangeText={setNome} value={nome} />
                    <BoxInput label="E-mail" placeholder="Digite seu melhor e-mail" onChangeText={setEmail} value={email} />
                    <BoxInput label="WhatsApp" placeholder="Digite seu WhatsApp" onChangeText={setWhats} value={whats} />
                    <BoxInput label="Senha" placeholder="Digite uma senha segura" isPassword onChangeText={setPasswdone} value={passwdone} />
                    <BoxInput label="Confirme a Senha" placeholder="Confirme a senha segura" isPassword onChangeText={setPasswdtwo} value={passwdtwo} />
                </View>
                <View className=" w-full pt-5 mb-28">
                    <Button label="Proximo passo" funcao={ProcessarRegister}></Button>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}