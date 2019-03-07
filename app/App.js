// import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";
// import SplashScreen from "react-native-splash-screen";
// import HomeScreen from "./components/home-screen-component/HomeScreen";
// import SettingScreen from "./components/setting-screen-component/SettingScreen";
// import { createAppContainer, createDrawerNavigator } from "react-navigation";

// export default class App extends Component {
//   componentDidMount = () => {
//     SplashScreen.hide();
//   };

//   render() {
//     return <MyAppDrawerNavigator />;
//   }
// }

// const AppDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   Setting: {
//     screen: SettingScreen
//   }
// });

// const MyAppDrawerNavigator = createAppContainer(AppDrawerNavigator);

import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SplashScreen from "react-native-splash-screen";

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import LoginScreenScreen from "./components/login-screen-component/LoginScreenScreen";

class App extends Component {
  componentDidMount = () => {
    SplashScreen.hide();
  };

  render() {
    return <AppContainer />;
  }
}
export default App;

class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}

class Feed extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Feed</Text>
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Settings</Text>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Feed,
    Profile,
    Settings
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="rocket"
            size={30}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreenScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
