import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
    label: string
    url?: string
}

export default function Button(props: ButtonProps) {

    const router = useRouter();

    return (
        <TouchableOpacity className="items-center bg-blue-500 rounded-md"
        onPress={() => router.navigate(`./${props.url}`)}>
            <Text className="text-xl text-white font-bold py-4 ">{props.label}</Text>
        </TouchableOpacity>
    );
}