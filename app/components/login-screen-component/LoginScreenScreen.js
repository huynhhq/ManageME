import React, { Component } from "react";
import Wallpaper from "../wallpaper-component/Wallpaper";
import Logo from "../logo-component/Logo";

export class LoginScreenScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
      </Wallpaper>
    );
  }
}

export default LoginScreenScreen;
