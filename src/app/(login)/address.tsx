import BoxInput from "@/src/components/BoxInput";
import Button from "@/src/components/Button";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";

export default function Address() {

    const router = useRouter();

    const [endereco, setEndereco] = useState("");
    const [complemento, setComplemento] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUF] = useState("");
    const [cep, setCEP] = useState("");

    function ProcessarAddress() {

        Keyboard.dismiss();

        if (!endereco.trim() || !complemento.trim() || !numero.trim() || !bairro.trim() || !cidade.trim() || !uf.trim() || !cep.trim()) {
            const titulo = "Campos vazios";
            const mensagem = "Por favor, preencha todos os campos para continuar.";

            if (Platform.OS === 'web') {
                window.alert(`${titulo}: ${mensagem}`);
            } else {
                Alert.alert(titulo, mensagem, [{ text: "OK" }]);
            }

            return;
        }

        if (__DEV__) {
            console.log(endereco)
            console.log(complemento)
            console.log(numero)
            console.log(bairro)
            console.log(cidade)
            console.log(uf)
            console.log(cep)
        }

        router.navigate('/');

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
                    <BoxInput label="Endereço" placeholder="Digite seu endereço" onChangeText={setEndereco} value={endereco} />
                    <View className="flex-row gap-3">
                        <View className="w-[70%]">
                            <BoxInput label="Complemeto" placeholder="Ex.: Qd. 01 Lt. 04" onChangeText={setComplemento} value={complemento} />
                        </View>
                        <View className="flex-1">
                            <BoxInput label="Numero" placeholder="Nº" onChangeText={setNumero} value={numero} />
                        </View>
                    </View>
                    <BoxInput label="Bairro" placeholder="Digite seu bairro" onChangeText={setBairro} value={bairro} />
                    <View className="flex-row gap-3">
                        <View className="w-[70%]">
                            <BoxInput label="Cidade" placeholder="Digite sua cidade" onChangeText={setCidade} value={cidade} />
                        </View>
                        <View className="flex-1">
                            <BoxInput label="UF" placeholder="UF" autoCapitalize="characters" maxLength={2} onChangeText={setUF} value={uf} />
                        </View>
                    </View>
                    <BoxInput label="CEP" placeholder="00000-000" keyboardType="numeric" maxLength={9} onChangeText={setCEP} value={cep} />
                </View>
                <View className=" w-full pt-5 mb-28">
                    <Button label="Criar minha conta" funcao={ProcessarAddress}></Button>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}