import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import GoScreen from './GoScreen';
import {Row, Grid} from 'react-native-easy-grid';
const slides = [
  {
    key: 'somethun',
    // title: 'Title 1',
    maintext: 'Keep Driping',
    normltxt: 'lorem ipsum blah blah blah ',
    image: require('./Images/g1.png'),
    backgroundColor: 'white',
  },
  {
    key: 'somethun-dos',
    // title: 'Title 2',
    maintext: 'Keep Watering',
    normltxt: 'lorem ipsum blah blah blah ',
    image: require('./Images/g2.png'),
    backgroundColor: 'white',
  },
  {
    key: 'somethun1',
    // title: 'Rocket guy',
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
      //To show the main page of the app
    };
  }
  // _onDone = () => {
  //   navigate('GoScreen');
  // };
  // _onSkip = () => {
  //   navigate('GoScreen');
  // };
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
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        onDone={()=>{this.props.navigation.navigate('GoScreen')}}
        showSkipButton={true}
        onSkip={()=>{this.props.navigation.navigate('GoScreen')}}
        activeDotStyle={{backgroundColor: '#11D58E'}}
        renderSkipButton={this.skipButton}
        renderNextButton={this.nextButton}
        renderDoneButton={this.doneButton}
      />
    );
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
});
