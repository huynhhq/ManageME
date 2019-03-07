import React, { Component } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";
import Styles from "./Styles";
import UserInput from "../user-input-component/UserInput";
import ButtonSubmit from "./ButtonSubmit";
import SignupSection from "./SignupSection";

import usernameImg from "../../assets/username.png";
import passwordImg from "../../assets/password.png";
import eyeImg from "../../assets/eye_black.png";

export class Form extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={Styles.container} behavior="padding">
        <UserInput
          source={usernameImg}
          placeholder="Username"
          autoCapitalize={"none"}
          returnKeyType={"done"}
          autoCorrect={false}
        />
        <UserInput
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={"done"}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.showPass}
        >
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default Form;
