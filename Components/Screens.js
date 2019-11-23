/* @flow */

import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {Button} from 'react-native-elements';

export default class Horizontal extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={styles.container}>
        <View>
          <ImageBackground
            style={styles.outer}
            source={require('./Images/splashpng.png')}
          />
        </View>
        <View>
          <ImageBackground
            style={styles.outer}
            source={require('./Images/download.png')}
          />
        </View>
        <View>
          <ImageBackground
            style={styles.outer}
            source={require('./Images/sec.png')}
          />
        </View>
        <View>
          <ImageBackground
            style={styles.outer}
            source={require('./Images/signIn.png')}>
            <View style={styles.headercontainer}>
              <View style={{width: 200}}>
                <Button
                  title="Sign in"
                  buttonStyle={{
                    backgroundColor: '#11D58E',
                    borderRadius: 20,
                    borderColor: '#11D58E',
                  }}
                  titleStyle={{
                    color: '#FFFFFF',
                    fontSize: 18,
                    textTransform: 'uppercase',
                  }}
                  containerStyle={{marginTop: 470}}
                  type="outline"
                  onPress={() => this.props.navigation.navigate('Login')}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  headerbg: {
    flex: 1,
    alignSelf: 'stretch',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  outer: {
    backgroundColor: '#007bb6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  headercontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // backgroundColor: 'rgba(17, 239, 142,0.6)',
  },
});
