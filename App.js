import React, {Component} from 'react';
import Main from './Components/Main';
import {View, ToastAndroid} from 'react-native';

import Signup from './Components/Signup';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SplashScreen from './Components/SplashScreen';
import Login from './Components/Login';
import Guidess from './Components/Guidess';
import PlantDetails from './Components/PlantDetail';
import NetInfo from '@react-native-community/netinfo';
import Graphs from './Components/Graphs';
import Fiveweeks from './Components/weeks/5weeks';
import Tenweeks from './Components/weeks/10weeks';
import Fifteenweeks from './Components/weeks/15weeks';

const AppMenuNavigator = createStackNavigator(
  {
    PlantDetail: {
      screen: PlantDetails,
    },

    Current: {
      screen: Graphs,
    },
    Fifteen: {
      screen: Fifteenweeks,
    },
    Five: {
      screen: Fiveweeks,
    },
    Ten: {
      screen: Tenweeks,
    },
  },
  {
    initialRouteName: 'PlantDetail',
    header: null,
    headerMode: 'none',
  },
);
const Loading = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
  },
});
const IntroScreens = createStackNavigator({
  Guidess: {
    screen: Guidess,
  },
});

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
});

const Myscreens = createSwitchNavigator(
  {
    SplashScreen: Loading,
    introApp: IntroScreens,
    LoginScreens: AuthStack,
    MainScreen: AppMenuNavigator,
  },
  {
    initialRouteName: 'SplashScreen',
    header: null,
    headerMode: 'none',
  },
);

const Myapp = createAppContainer(Myscreens);

class App extends Component {
  componentDidMount() {
    NetInfo.getConnectionInfo().then(connectionInfo => {
      ToastAndroid.show(
        'Initial Network Connectivity Type: ' +
          connectionInfo.type +
          ', effectiveType: ' +
          connectionInfo.effectiveType,
        ToastAndroid.LONG,
      );
    });

    NetInfo.addEventListener('connectionChange', this.handleConnectivityChange);
  }
  componentWillUnmount() {
    NetInfo.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange,
    );
  }
  handleConnectivityChange = connectionInfo => {
    switch (connectionInfo.type) {
      case 'none':
        ToastAndroid.show('You are now offline!', ToastAndroid.LONG);
        break;
      case 'wifi':
        ToastAndroid.show('You are now connected to WiFi!', ToastAndroid.LONG);
        break;
      case 'cellular':
        ToastAndroid.show(
          'You are now connected to Cellular!',
          ToastAndroid.LONG,
        );
        break;
      case 'unknown':
        ToastAndroid.show(
          'You now have unknown connection!',
          ToastAndroid.LONG,
        );
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Myapp />
        {/* <LoadApp /> */}
      </View>
    );
  }
}

export default App;
