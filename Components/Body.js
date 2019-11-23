/* @flow */

import React, {Component} from 'react';
import {View, ScrollView, Image, Dimensions, StyleSheet} from 'react-native';

export default class Body extends Component {
  render() {
    return (
      <ScrollView style={styles.main}>
        <View style={styles.bigview}>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('./Images/img2.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('./Images/img1.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('./Images/img3.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('./Images/img4.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('./Images/img5.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('./Images/img6.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('./Images/img4.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('./Images/img1.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('./Images/img3.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image
              style={styles.myimage}
              source={require('./Images/img4.jpeg')}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  bigview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  smallview: {
    margin: 2,
    height: 100,
    width: Dimensions.get('window').width / 2 - 4,
  },
  myimage: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
});
