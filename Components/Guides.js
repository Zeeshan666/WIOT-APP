import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Row, Grid} from 'react-native-easy-grid';
import SplashScreen from './SplashScreen';
import GoScreen from './GoScreen';
import AnimatedEllipsis from 'react-native-animated-ellipsis';
export class Guides extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView horizontal={true} pagingEnabled={true}>
        
        <View style={styles.guides}>
          <Grid>
            <Row size={4} style={styles.guidesTop}>
              <Animatable.View animation="fadeIn" easing="ease-in" delay={2000}>
                <Image
                  style={styles.guidesTopImg}
                  source={require('./Images/g1.png')}
                />
              </Animatable.View>
            </Row>
            <Row size={2} style={styles.guidesDots}>
              <AnimatedEllipsis
                numberOfDots={3}
                animationDelay={150}
                minOpacity={0.4}
                style={styles.dots}
              />
            </Row>

            <Row size={4} style={{justifyContent: 'center'}}>
              <View>
                <View style={styles.MainTextContainer}>
                  <Text style={styles.MainText}>keep tracking</Text>
                </View>

                <View style={styles.guidesTextContainer}>
                  <Text style={styles.guidesText}>dumy Text by default</Text>
                  <Text style={styles.guidesText}>dumy Text React</Text>
                  <Text style={styles.guidesText}> default native</Text>
                </View>
                <View style={styles.skipTextContainer}>
                  <TouchableOpacity onPress={() => navigate('GoScreen')}>
                    <Animatable.View
                      animation="flash"
                      easing="ease-in"
                      iterationCount="infinite">
                      <Text style={styles.skipText}>skip</Text>
                    </Animatable.View>
                  </TouchableOpacity>
                </View>
              </View>
            </Row>
          </Grid>
        </View>
        <View style={styles.guides}>
          <Grid>
            <Row size={4} style={styles.guidesTop}>
              <Animatable.View animation="fadeIn" easing="ease-in" delay={2000}>
                <Image
                  style={styles.guidesTopImg}
                  source={require('./Images/g2.png')}
                />
              </Animatable.View>
            </Row>
            <Row size={2} style={styles.guidesDots}>
              <AnimatedEllipsis
                numberOfDots={3}
                animationDelay={150}
                minOpacity={0.4}
                style={styles.dots}
              />
            </Row>

            <Row size={4} style={{justifyContent: 'center'}}>
              <View>
                <View style={styles.MainTextContainer}>
                  <Text style={styles.MainText}>Keep Dripping</Text>
                </View>

                <View style={styles.guidesTextContainer}>
                  <Text style={styles.guidesText}>dumy Text by default</Text>
                  <Text style={styles.guidesText}>dumy Text React</Text>
                  <Text style={styles.guidesText}> default native</Text>
                </View>
                <View style={styles.skipTextContainer}>
                  <TouchableOpacity onPress={() => navigate('GoScreen')}>
                    <Animatable.View
                      animation="flash"
                      easing="ease-in"
                      iterationCount="infinite">
                      <Text style={styles.skipText}>skip</Text>
                    </Animatable.View>
                  </TouchableOpacity>
                </View>
              </View>
            </Row>
          </Grid>
        </View>
        <View style={styles.guides}>
          <Grid>
            <Row size={4} style={styles.guidesTop}>
              <Animatable.View animation="fadeIn" easing="ease-in" delay={2000}>
                <Image
                  style={styles.guidesTopImg}
                  source={require('./Images/g3.png')}
                />
              </Animatable.View>
            </Row>
            <Row size={2} style={styles.guidesDots}>
              <AnimatedEllipsis
                numberOfDots={3}
                animationDelay={150}
                minOpacity={0.4}
                style={styles.dots}
              />
            </Row>

            <Row size={4} style={{justifyContent: 'center'}}>
              <View>
                <View style={styles.MainTextContainer}>
                  <Text style={styles.MainText}> Keep watering</Text>
                </View>

                <View style={styles.guidesTextContainer}>
                  <Text style={styles.guidesText}>dumy Text by default</Text>
                  <Text style={styles.guidesText}>dumy Text React</Text>
                  <Text style={styles.guidesText}> default native</Text>
                </View>
                <View style={styles.skipTextContainer}>
                  <Animatable.View
                    animation="flash"
                    easing="ease-in"
                    iterationCount="infinite">
                    <TouchableOpacity onPress={() => navigate('GoScreen')}>
                      <Text style={styles.skipText}>skip</Text>
                    </TouchableOpacity>
                  </Animatable.View>
                </View>
              </View>
            </Row>
          </Grid>
        </View>
      </ScrollView>
    );
  }
}

export default Guides;

const styles = StyleSheet.create({
  guides: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  guidesTop: {
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  guidesTopImg: {
    width: 300,
    height: 300,
    marginTop: 50,
  },
  guidesDots: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dots: {
    color: '#11D58E',
    fontSize: 82,
    letterSpacing: -8,
  },
  MainText: {
    color: '#11D58E',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 40,
    opacity: 1,
    letterSpacing: 0,
  },
  guidesText: {
    letterSpacing: 0,
    color: '#707070',
    opacity: 1,
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 30,
  },
  guidesTextContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipTextContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 50,
  },
  skipText: {
    color: '#11D58E',
    letterSpacing: 0,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 24,
  },
});
