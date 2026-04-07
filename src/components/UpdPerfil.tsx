import { Image, Pressable, Text, View } from "react-native";

const iconesPefil = {
    dados: require("../assets/dados.png"),
    endereco: require("../assets/endereco.png"),
    logout: require("../assets/logout.png"),
    expandir: require("../assets/expandir.png")
};

interface UpdPerfilProps {
    titulo: string
    subtitulo: string
    icone01?: keyof typeof iconesPefil
    icone02?: keyof typeof iconesPefil
    linhaSuperior?: boolean
    onPress?: () => void
}

export default function UpdPerfil(props: UpdPerfilProps) {
    return (
        <View>
            {props.linhaSuperior && (
                <View className="h-[1px] w-full border-b pb-10 border-zinc-300" />
            )}
            <Pressable className="active:opacity-70">
                <View className="flex-row justify-between items-center py-6 border-b border-zinc-300">
                    {props.icone01 && (<Image source={iconesPefil[props.icone01]}
                        style={{ width: 45, height: 45, overflow: "hidden" }}
                        resizeMode="contain" />)}
                    <View className="flex-1">
                        <Text className="text-2xl pl-4 font-bold text-zinc-500">{props.titulo}</Text>
                        <Text className="text-xl pl-4 font-normal text-zinc-500">{props.subtitulo}</Text>
                    </View>
                    {props.icone02 && (<Image source={iconesPefil[props.icone02]}
                        style={{ width: 50, height: 50, overflow: "hidden" }}
                        resizeMode="contain" />)}
                </View>
            </Pressable>
        </View>
    );
}