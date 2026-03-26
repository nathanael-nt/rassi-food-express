import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";


export default function Index() {
  const router = useRouter();
  return (
   <SafeAreaView className="flex-1 bg-blue-500 mt-16 mb-16">
    <View  className="flex-1 items-center justify-between pt-10 pb-10 bg-blue-500">
      <Image source={icons.logo02}/>
      <TouchableOpacity onPress={()=> router.navigate ('./login')}>
      <Text className="text-4x1 font-bold text-white">
        Iniciar
      </Text>
      </TouchableOpacity>
      <Text className="text-4x1 font-normal text-white">
        By React Native
      </Text>
    </View>
   </SafeAreaView>
  );
}
