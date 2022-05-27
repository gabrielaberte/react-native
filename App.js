import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Cesta from "./src/telas/Cesta/components";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

export default function App() {
  //importando as fontes do google
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });
  //pra evitar se a pagina carregar antes da font estar carregada
  if(!fontCarregada) {
    return <View></View>
  }
  return (
    <SafeAreaView>
      <View>
        <Cesta />
        <StatusBar />
      </View>
    </SafeAreaView>
  );
}
//h