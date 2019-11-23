import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import {Button, Icon, Input} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ScrollView>
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
                </Animatable.View>
              </View>
            </Row>
            <Row size={2}>
              <View style={styles.SRowView}>
                <Input
                  placeholder="user name"
                  inputContainerStyle={styles.inputContainerStyle}
                  labelStyle={styles.labelStyle}
                />
                <Input
                  placeholder="Password"
                  secureTextEntry={true}
                  inputContainerStyle={styles.inputContainerStyle}
                  labelStyle={styles.labelStyle}
                />
              </View>
            </Row>
            <Row size={2}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Animatable.View animation="zoomIn" easing="ease-in">
                  <Button
                    title="GO !"
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.btnTxt}
                    type="outline"
                    onPress={() => alert('press me')}
                  />
                  <View style={styles.btmTxtView}>
                    <Text style={styles.btmTxtF}>Or connect with</Text>

                    <View style={{flexDirection: 'row'}}>
                      <Icon
                        raised
                        name="facebook-f"
                        type="font-awesome"
                        color="#11D58E"
                        onPress={() => alert('link nt wrking')}
                      />
                      <Icon
                        raised
                        name="google"
                        type="font-awesome"
                        color="#11D58E"
                        onPress={() => alert('link nt wrking')}
                      />
                    </View>
                  </View>
                </Animatable.View>
              </View>
            </Row>
          </Grid>
        </ImageBackground>
      </ScrollView>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  outer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  fRowView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SRowView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginVertical: 30,
    marginHorizontal: 42,
    borderRadius: 35,
  },
  inputContainerStyle: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  labelStyle: {
    color: '#C9C9C9',
  },

  textImg: {
    width: 180,
    height: 140,
    marginTop: 60,
    resizeMode: 'contain',
  },

  btnTxt: {
    color: '#FFFFFF',
    fontSize: 20,
    textTransform: 'uppercase',
    opacity: 0.9,
    fontWeight: '300',
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#11D58E',
    borderRadius: 20,
    borderColor: '#11D58E',
    width: 150,
  },
  btmTxtView: {
    marginVertical: 10,
    marginLeft: 10,
  },
  btmTxtF: {
    fontSize: 15,
    color: '#CECECE',
    textTransform: 'capitalize',
    marginLeft: 10,
  },
  btmTxtS: {},
});
