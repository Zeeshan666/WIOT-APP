import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import {Button} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
export class GoScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground
        style={styles.outer}
        source={require('./Images/login.png')}>
        <Grid>
          <Row size={2}>
            <View style={styles.fRowView}>
              <Animatable.View animation="fadeInRight" easing="ease-in">
                <Image
                  style={styles.textImg}
                  source={require('./Images/txtlogo.png')}
                />
                <View style={styles.txtView}>
                  <Text style={styles.txt}>Sign in to Automate</Text>
                  <Text style={styles.txt}>Watering</Text>
                </View>
              </Animatable.View>
            </View>
          </Row>
          <Row size={2}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Animatable.View animation="zoomIn" easing="ease-in">
                <Button
                  title="Sign in"
                  buttonStyle={styles.buttonStyle}
                  titleStyle={styles.btnTxt}
                  type="outline"
                  onPress={() => navigate('Login')}
                />
                <View style={styles.btmTxtView}>
                  <Text style={styles.btmTxtF}>Dont have account?</Text>
                  <TouchableOpacity onPress={() => navigate('Signup')}>
                    <Text style={styles.btmTxtS}> SignUp</Text>
                  </TouchableOpacity>
                </View>
              </Animatable.View>
            </View>
          </Row>
        </Grid>
      </ImageBackground>
    );
  }
}

export default GoScreen;
const styles = StyleSheet.create({
  outer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  fRowView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
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
  textImg: {
    width: 180,
    height: 140,
    marginRight: 30,
    marginTop: 60,
    resizeMode: 'contain',
  },
  txtView: {
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {fontSize: 18, bottom: 20},
  btnTxt: {
    color: '#FFFFFF',
    fontSize: 20,
    textTransform: 'uppercase',
    opacity: 0.9,
    fontWeight: '300',
  },
  buttonStyle: {
    backgroundColor: '#11D58E',
    borderRadius: 20,
    borderColor: '#11D58E',
    width: 220,
  },
  btmTxtView: {
    marginVertical: 10,
    flexDirection: 'row',
    left: 15,
  },
  btmTxtF: {
    fontSize: 15,
    color: '#11D58E',
  },
  btmTxtS: {},
});
