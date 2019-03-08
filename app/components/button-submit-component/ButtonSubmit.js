import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  Alert,
  View
} from "react-native";
import Styles from "./Styles";
import { Styles } from "./Styles";
import spinner from "../../assets/loading.gif";
import GLOBALS from "../../utils/Globals";

export class ButtonSubmit extends Component {
  constructor() {
    super();

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({ isLoading: true });
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    }).start();

    setTimeout(() => {
      this._onGrow();
    }, 2000);

    setTimeout(() => {
      Actions.secondScreen();
      this.setState({ isLoading: false });
      this.buttonAnimated.setValue(0);
      this.growAnimated.setValue(0);
    }, 2300);
  }

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    }).start();
  }

  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [GLOBALS.DEVICE_WIDTH - GLOBALS.MAGIN, GLOBALS.MAGIN]
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, GLOBALS.MAGIN]
    });

    return (
      <View style={Styles.container}>
        <Animated.View style={{ width: changeWidth }}>
          <TouchableOpacity
            style={Styles.button}
            onPress={this._onPress}
            activeOpacity={1}
          >
            {this.state.isLoading ? (
              <Image source={spinner} style={Styles.image} />
            ) : (
              <Text style={Styles.text}>LOGIN</Text>
            )}
          </TouchableOpacity>
          <Animated.View
            style={[Styles.circle, { transform: [{ scale: changeScale }] }]}
          />
        </Animated.View>
      </View>
    );
  }
}

export default ButtonSubmit;
