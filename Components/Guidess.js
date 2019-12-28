import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Row, Grid} from 'react-native-easy-grid';
import {Button} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
const slides = [
  {
    key: 'somethun',
    maintext: 'Keep Driping',
    normltxt: 'lorem ipsum blah blah blah ',
    image: require('./Images/g1.png'),
    backgroundColor: 'white',
  },
  {
    key: 'somethun-dos',
    maintext: 'Keep Watering',
    normltxt: 'lorem ipsum blah blah blah ',
    image: require('./Images/g2.png'),
    backgroundColor: 'white',
  },
  {
    key: 'somethun1',
    maintext: 'Keep Controling',
    normltxt: 'lorem ipsum blah blah blah ',
    image: require('./Images/g3.png'),
    backgroundColor: 'white',
  },
];
export class Guidess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      loading: true,
      //To show the main page of the app
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('first_time').then(value => {
      this.setState({showRealApp: !!value, loading: false});
    });
  }
  doneButton = () => {
    return (
      <View style={styles.skipButton}>
        <Text style={{color: '#11D58E', textTransform: 'uppercase'}}>Done</Text>
      </View>
    );
  };
  nextButton = () => {
    return (
      <View style={styles.skipButton}>
        <Text style={{color: '#11D58E', textTransform: 'uppercase'}}>Next</Text>
      </View>
    );
  };
  skipButton = () => {
    return (
      <View style={styles.skipButton}>
        <Text style={{color: '#11D58E', textTransform: 'uppercase'}}>skip</Text>
      </View>
    );
  };
  _renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 2,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 200,
          //  marginBottom: 200,
        }}>
        {/* <Text style={styles.title}>{item.title}</Text> */}
        <Image style={styles.image} source={item.image} />
        <Text style={styles.MainText}>{item.maintext}</Text>
        <Text style={styles.guidesText}>{item.normltxt}</Text>
      </View>
    );
  };
  static navigationOptions = {
    header: null,
  };
  render() {
    const {navigate} = this.props.navigation;
    const {showRealApp} = this.state;
    console.log('current state ' + showRealApp);
    if (this.state.loading) return <ActivityIndicator size="large" />;
    if (this.state.showRealApp) {
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
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={() => {
            AsyncStorage.setItem('first_time', 'true').then(() => {
              this.setState({showRealApp: true});
            });
          }}
          showSkipButton={true}
          onSkip={() => {
            AsyncStorage.setItem('first_time', 'true').then(() => {
              this.setState({showRealApp: true});
            });
          }}
          activeDotStyle={{backgroundColor: '#11D58E'}}
          renderSkipButton={this.skipButton}
          renderNextButton={this.nextButton}
          renderDoneButton={this.doneButton}
        />
      );
    }
  }
}

export default Guidess;
const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  MainText: {
    color: '#11D58E',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 30,
    opacity: 1,
    letterSpacing: 0,
  },
  skipButton: {
    //backgroundColor: 'blue',
    width: 60,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },
  guidesText: {
    letterSpacing: 0,
    color: '#707070',
    opacity: 1,
    fontWeight: '600',
    fontSize: 14,
    // lineHeight: 30,
  },
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
