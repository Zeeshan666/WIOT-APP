import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import * as Animatable from 'react-native-animatable';

export class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    setTimeout(() => {
      this.props.navigation.navigate('Guidess');
    }, 2000);

    return (
      <View style={styles.container}>
        <Grid>
          <Row size={100} style={styles.Row}>
            <Animatable.View animation="fadeIn" easing="ease-in">
              <Image
                style={{width: 150, height: 150, marginBottom: 50}}
                source={require('./Images/logo.png')}
              />
            </Animatable.View>
          </Row>
        </Grid>
      </View>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#11D58E',
  },
  Row: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
