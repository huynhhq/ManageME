import React, { Component } from "react";
import { View, TextInput, Image } from "react-native";
import PropTypes from "prop-types";
import Styles from "./Styles";

export class UserInput extends Component {
  render() {
    return (
      <View style={Styles.inputWrapper}>
        <Image source={this.props.source} style={Styles.inlineImg} />
        <TextInput
          style={Styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

UserInput.propTypes = {
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string
};

export default UserInput;
