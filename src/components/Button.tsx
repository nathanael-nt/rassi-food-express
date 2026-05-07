import { useRouter } from "expo-router";
import { Platform, Pressable, Text } from "react-native";

interface ButtonProps {
    label: string
    url?: string
    funcao?: () => void
}

export default function Button(props: ButtonProps) {

    const router = useRouter();

    const handlePress = () => {

        Platform.OS === 'web' && (document.activeElement as HTMLElement)?.blur();

        props.funcao?.();

        props.url && router.navigate(`./${props.url}`);

        if (__DEV__ && !props.funcao && !props.url) {
            console.warn(`O botão "${props.label}" foi clicado, mas não possui função ou URL.`);
        }

    };

    return (
        <Pressable
            onPress={handlePress}
            className="active:opacity-70 items-center bg-blue-500 rounded-2xl">
            <Text className="text-xl text-white font-bold py-4 ">{props.label}</Text>
        </Pressable>
    );
}