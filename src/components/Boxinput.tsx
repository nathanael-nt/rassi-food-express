import { Text, TextInput, View } from "react-native";

interface BoxInputProps {
    label?: string
    placeholder: string
    isPassword?: boolean
}

export default function BoxInput(props: BoxInputProps) {
    return (
        <View className="pb-10">
            <Text className="text-xl pb-2 font-bold">{props.label}</Text>
            <TextInput className="text-2xl border-2 px-5 py-2 border-zinc-400 rounded-md bg-zinc-50"
            placeholder={props.placeholder}
            placeholderTextColor="#d4d4d8"
            secureTextEntry={props.isPassword} />
        </View>
    );
}