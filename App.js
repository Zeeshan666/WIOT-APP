import React, {Component} from 'react';
import Main from './Components/Main';
import {View} from 'react-native';

import Signup from './Components/Signup';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import GoScreen from './Components/GoScreen';
import SplashScreen from './Components/SplashScreen';
import Login from './Components/Login';
import Guidess from './Components/Guidess';
//import Guides from './Components/Guides';

const AppMenuNavigator = createStackNavigator({
  // SplashScreen: {
  //   screen: SplashScreen,
  // },
  Guidess: {
    screen: Guidess,
  },
  GoScreen: {
    screen: GoScreen,
  },
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
});
const Loading = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
  },
});
// const MyGuidess = createStackNavigator({
//   Guidess: {
//     screen: Guidess,
//   },
//   GoScreen: {
//     screen: GoScreen,
//   },
// });
const Myscreens = createSwitchNavigator(
  {
    Loading: Loading,
    Zap: AppMenuNavigator,
    // Guidess: MyGuidess,
    // app: AppMenuNavigator,
  },
  {
    initialRouteName: 'Loading',
  },
);
const Myapp = createAppContainer(Myscreens);

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Myapp />
      </View>
    );
  }
}

export default App;
