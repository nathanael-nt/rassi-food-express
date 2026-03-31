import { Image, ScrollView, TouchableOpacity, View } from "react-native";

interface BannersProps {
    data: {
        id: number;
        descricao: string;
        icone: any;
    }[]
}

export default function Banners(props: BannersProps) {

    return (
        <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {
                props.data.map((banners: any, index: any) => {
                    return (
                        <View key={index} className="h-36 justify-center pr-5 bg-white">
                            <TouchableOpacity>
                                <Image source={banners.icone}
                                    style={{ width: 232, height: 102, borderRadius:10, overflow:"hidden" }} />
                            </TouchableOpacity>
                        </View>
                    );
                })
            }
        </ScrollView>
    );
}