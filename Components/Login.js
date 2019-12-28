import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import {Button, Icon, Input} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import {BallIndicator} from 'react-native-indicators';
import AsyncStorage from '@react-native-community/async-storage';
export class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    name: '',
    password: '',
    loading: false,
  };
  componentDidMount() {
    AsyncStorage.getItem('Login').then(userdata => {
      let userinfo = JSON.parse(userdata);
      if (userinfo) {
        this.setState({
          name: userinfo.name,
          password: userinfo.password,
        });
        console.log(userinfo.password);
      }
    });
  }

  submitHandler = e => {
    const {name, password} = this.state;
    const login = {
      name: name,
      password: password,
    };
    try {
      AsyncStorage.setItem('Login', JSON.stringify(login));
    } catch (e) {
      console.log(e);
    }
    if (name.trim('') !== '') {
      this.setState({loading: true});
      axios
        .post(
          'http://raaye.com.pk/api/login',
          {
            email: name,
            password: password,
          },
          {
            headers: {
              token:
                '$2y$10$lh2WOGol2drQdzltSN2Y3ev9m.LdTOjfd8tUzt8zDdwOPheRwiE2O',
            },
          },
        )
        .then(res => {
          this.setState({loading: false});
          if (res.data.msg === 'success') {
            this.props.navigation.navigate('PlantDetail');
            ///Alert.alert('welcome to wiot');
          } else {
            Alert.alert('Invalid Email Or Password');
          }
        })
        .catch(err => console.log(err));
    } else {
      Alert.alert(
        'Sorry',

        'Plx fill form correctly',
        [
          {
            text: 'OK',
            onPress: () => console.log('Ask me later pressed'),
          },
        ],
        {cancelable: false},
      );
    }
  };
  render() {
    const {navigate} = this.props.navigation;
    if (this.state.loading)
      return (
        <BallIndicator
          size={65}
          color="#11D58E"
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        />
      );
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
                  placeholder="userName"
                  inputContainerStyle={styles.inputContainerStyle}
                  labelStyle={styles.labelStyle}
                  value={this.state.name}
                  onChangeText={val => this.setState({name: val})}
                />
                <Input
                  placeholder="Password"
                  secureTextEntry={true}
                  inputContainerStyle={styles.inputContainerStyle}
                  labelStyle={styles.labelStyle}
                  value={this.state.password}
                  onChangeText={val => this.setState({password: val})}
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
                    //onPress={() => navigate('PlantDetail')}
                    onPress={this.submitHandler}
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
