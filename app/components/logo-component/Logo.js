import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Styles from "./Styles";
import GLOBALS from "../../utils/Globals";
import logoImg from "../../assets/main_logo_circle.png";

export class Logo extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Image source={logoImg} style={Styles.image} />
        <Text style={Styles.text}>{GLOBALS.APP_NAME}</Text>
      </View>
    );
  }
}

export default Logo;
