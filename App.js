import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Cesta from "./src/telas/Cesta";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import mock from './src/mocks/cesta';
import AppLoading from "expo-app-loading";


export default function App() {
  //importando as fontes do google
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });
  //pra evitar se a pagina carregar antes da font estar carregada
  if(!fontCarregada) {
    return <AppLoading />
  }

  //flex 1 é para que a safe area ocupe 100% da tela
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Cesta {...mock}/>
        <StatusBar />
      </View>
    </SafeAreaView>
  );
}
//h