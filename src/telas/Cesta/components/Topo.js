import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import Texto from "../../../components/Texto";
import Topos from "../../../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Topo() {
  return (
    <>
      <Image source={Topos} style={estilos.topo} />
      <Texto style={estilos.titulo}>Detalhes da Cesta</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    //pegando altura / largura * width pra ajustar independente do tamanho do celular
    height: (578 / 768) * width,
    fontFamily: "MontserratRegular",
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
});
