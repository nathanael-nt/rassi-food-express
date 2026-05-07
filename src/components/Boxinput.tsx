import { Text, TextInput, TextInputProps, View } from "react-native";

interface BoxInputProps extends TextInputProps {
    label?: string
    isPassword?: boolean
}

export default function BoxInput({ label, isPassword, ...rest }: BoxInputProps) {
    return (
        <View className="w-full pb-6">
            {label && (
                <Text className="text-lg pb-1 font-semibold text-zinc-700">
                    {label}
                </Text>
            )}
            <TextInput className="text-xl border-2 px-4 py-3 border-zinc-300 rounded-xl bg-zinc-50 text-zinc-800 focus:border-blue-500"
                placeholderTextColor="#A1A1AA"
                secureTextEntry={isPassword}
                {...rest}
            />
        </View>
    );
}