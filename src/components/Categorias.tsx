import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface CategoriasProps {
    data: {
        id: number;
        descricao: string;
        icone: any;
    }[]
}

export default function Categorias(props: CategoriasProps) {
    return (
        <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {
                props.data.map((categoria: any, index: any) => {
                    return (
                        <View key={index} className="h-36 justify-center pr-5 bg-white">
                            <TouchableOpacity>
                                <View className=" bg-zinc-200 rounded-full overflow-hidden">
                                    <Image source={categoria.icone}
                                        style={{ width: 92, height: 92 }} />
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text className="text-xl font-normal text-center text-zinc-400">{categoria.descricao}</Text>
                            </View>
                        </View>
                    );
                })
            }
        </ScrollView>
    );
}