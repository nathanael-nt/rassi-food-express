import BoxInput from "@/src/components/BoxInput";
import Button from "@/src/components/Button";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Address() {

    const router = useRouter();

    return (
        <View className="flex-1 items-center bg-white mx-6 pt-10 mb-18">
            <Text className="text-2xl font-normal">
                Criar sua conta
            </Text>
            <View className=" w-full pt-0 mb-18">
                <BoxInput label="Endereço" placeholder="Digite seu endereço" />
                
                <View className="flex-row gap-3">
                    <View className="w-[70%]">
                    <BoxInput label="Complemento" placeholder="Digite o complemento" />
                    </View>
                    <View className="w-[27%]">
                    <BoxInput label="Número" placeholder="Nº" />
                    </View>
                </View>
                <BoxInput label="Bairro" placeholder="Digite seu bairro" />
                
                <View className="flex-row gap-3">
                    <View className="w-[70%]">
                    <BoxInput label="Cidade" placeholder="Digite sua cidade" />
                    </View>
                    <View className="w-[27%]">
                    <BoxInput label="UF" placeholder="UF" />
                    </View>
                </View>
                
                <BoxInput label="CEP" placeholder="Digite seu cep" />
            </View>
            <View className=" w-full pt-5 mb-18">
                <Button label="Criar minha conta" url=""></Button>
            </View>
            <TouchableOpacity onPress={() => router.navigate('./register')}>
                <Text className="text-2xl font-normal">
                    
                </Text>
            </TouchableOpacity>
        </View>
    );
}