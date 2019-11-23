import React, {Component} from 'react';
import Header from './Header';
import {View, StyleSheet} from 'react-native';
import Mid from './Mid';
import Body from './Body';
import Footer from './Footer';

class Main extends Component {
  static navigationOptions = {
    title: 'Main',
    headerStyle: {
      backgroundColor: '#512DA8',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Mid />
        <Body />
        <Footer />
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
