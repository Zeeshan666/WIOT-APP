/* @flow */

import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.headerbg}
        source={require('./Images/headerbg.jpeg')}>
        <View style={styles.headercontainer}>
          <View style={styles.profilepiccontainer}>
            <Image style={styles.mypic} source={require('./Images/zee.jpg')} />
          </View>
          <Text style={styles.name}>zeeshan satti</Text>
          <Text style={styles.liner}>Software engineer</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerbg: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
  headercontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  profilepiccontainer: {
    width: 140,
    height: 140,
    marginTop: 10,
  },
  mypic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 80,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    marginTop: 18,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  liner: {
    color: '#fff',
    marginTop: 5,
    fontSize: 15,
    fontStyle: 'italic',
  },
});
