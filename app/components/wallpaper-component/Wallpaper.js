import React, { Component } from "react";
import { ImageBackground } from "react-native";
import Styles from "./Styles";
import { GetGreetingTime } from "../../utils/Utils";
import moment from "moment";

export class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground style={Styles.picture} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const bgSrc = GetGreetingTime(moment());

export default Wallpaper;
