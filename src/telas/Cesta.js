import React from "react";
import { Text, Image, StyleSheet, Dimensions, View } from "react-native";
import Topo from "../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Cesta() {
  return (
    <>
      <Image source={Topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhes da Cesta</Text>
      <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <View>
          <Text style={estilos.nomeFazenda}>Gabs Berte Farm</Text>
        </View>
        <Text style={estilos.estiloDescricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha.
        </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    //pegando altura / largura * width pra ajustar independente do tamanho do celular
    height: (578 / 768) * width,
  },
  titulo: {
    position: "absolute",
    //posição absoluta faz o texto ficar por cima da imagem
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
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
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
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
