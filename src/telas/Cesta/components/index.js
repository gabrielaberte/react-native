import React from "react";
import { Text, Image, StyleSheet, Dimensions, View } from "react-native";
import logo from "../../../../assets/logo.png";
import Texto from "../../../components/Texto";
import Topo from "./Topo";

const width = Dimensions.get("screen").width;

export default function Cesta() {
  return (
    <>
      <Topo />
      <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
          <Image source={logo} style={estilos.imagemFazenda} />
          <Texto style={estilos.nomeFazenda}>Gabs Berte Farm</Texto>
        </View>
        <Texto style={estilos.estiloDescricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha.
        </Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  estiloDescricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
