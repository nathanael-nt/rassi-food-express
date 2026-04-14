import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, View } from "react-native";

interface BannersProps {
    data: {
        id: number;
        descricao: string;
        icone: any;
        onPress?: () => void
    }[]
}

export default function Banners(props: BannersProps) {

    const router = useRouter();

    return (
        <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {
                props.data.map((banners: any, index: any) => {
                    return (
                        <View key={index} className="h-36 justify-center pr-5 bg-white">
                            <Pressable className="active:opacity-70" onPress={() => router.push("/busca")}>
                                <Image source={banners.icone}
                                    style={{ width: 232, height: 102, borderRadius:10, overflow:"hidden" }} />
                            </Pressable>
                        </View>
                    );
                })
            }
        </ScrollView>
    );
}