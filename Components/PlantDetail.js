/* eslint-disable no-undef */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Switch,
  Alert,
} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Graphs from './Graphs';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Fiveweeks from './weeks/5weeks';
import Tenweeks from './weeks/10weeks';
import Fifteenweeks from './weeks/15weeks';
import axios from 'axios';

const PlantDetail = () => {
  const [data, setData] = useState({
    moisture: 0,
    current: 0,
    flow: 0,
    Total: 0,
    humidity: 0,
    temperature: 0,
  });
  const [on, setOn] = useState(false);
  const [currentDate, setCurrentDate] = useState({
    date: '',
  });

  useEffect(() => {
    getData();
    getDate();

    setInterval(() => {
      axios
        .get('http://192.168.0.105/test/dht.php?form=getData')
        .then(res =>
          setData({
            ...data,
            moisture: res.data.mositure_value,
            current: res.data.current_flow,
            flow: res.data.flow_rate,
            Total: res.data.total_flow,
            temperature: res.data.temperature,
            humidity: res.data.humidity,
          }),
        )
        .catch(err => console.log(err));
    }, 8000);
  }, []);

  toggleButton = val => {
    const a = val;

    console.log(a);
    axios({
      method: 'post',
      url: 'http://digitrixsolutions.com/test/dht.php?form=update&update=' + a,
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    setOn(val);
    try {
      AsyncStorage.setItem('toggleBtn', JSON.stringify(val));
    } catch (e) {
      console.log(e);
    }
  };

  getData = () => {
    AsyncStorage.getItem('toggleBtn').then(userdata => {
      let userinfo = JSON.parse(userdata);
      if (userinfo) {
        setOn(userinfo);
      }
    });
  };
  getDate = () => {
    var monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    // var that = this;
    var date = new Date().getDate(); //Current Date
    var month = monthNames[new Date().getMonth()]; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate({date: date + '-' + month + '-' + year});
    //console.log(currentDate);
  };

  const {moisture, current, flow, Total, temperature, humidity} = data;

  var mytime = setTimeout(() => {
    if (moisture >= 50) {
      Alert.alert('Moisture', 'turn on the motor', [
        {
          text: 'ON',
          onPress: () => toggleButton(true),
          style: 'cancel',
        },
        {text: 'OFF', onPress: () => myinterval()},
      ]);
    }
  }, 10000);
  myinterval = () => {
    console.log('hello');
    clearTimeout(mytime);
  };

  return (
    <View style={{flex: 1}}>
      <Grid>
        <Row size={3.5}>
          <Col size={2.5} style={styles.ColTree}>
            <Image
              style={styles.ColTreeImg}
              source={require('./Images/plan.png')}
            />
          </Col>
          <Col size={2} style={styles.Col}>
            <View style={styles.iconDiv}>
              {/* <Icon
                name="cog"
                type="font-awesome"
                color="white"
                iconStyle={{marginVertical: 5}}
                //   onPress={() => alert('hi')}
              /> */}
              <Switch
                style={{
                  marginTop: 5,
                  marginRight: 15,
                  transform: [{scaleX: 1.2}, {scaleY: 0.9}],
                }}
                onValueChange={e => toggleButton(e)}
                value={on}
                // trackColor={}
                color="red"
              />
            </View>
            <View style={styles.fruitView}>
              <Text style={styles.fruitViewText}>
                {on ? 'Motor ON' : 'Motor OFF'}
              </Text>
            </View>
            <View style={styles.WeekView}>
              <Text style={styles.WeekTextView}>{currentDate.date}</Text>
            </View>
            <View style={styles.TempView}>
              <View>
                <Text style={styles.TempNum}>{temperature}</Text>
                <Text style={styles.TempText}>Temperture</Text>
              </View>

              <View style={[styles.TempCircle, styles.Circle]} />
            </View>
            <View style={styles.TempView}>
              <View>
                <Text style={styles.TempNum}>{moisture} %</Text>
                <Text style={styles.TempText}>Moisture</Text>
              </View>

              <View style={[styles.MosCircle, styles.Circle]} />
            </View>
            <View style={styles.TempView}>
              <View>
                <Text style={styles.TempNum}>{humidity}</Text>
                <Text style={styles.TempText}>Humidity</Text>
              </View>

              <View style={[styles.HumCircle, styles.Circle]} />
            </View>
          </Col>
        </Row>
        <Row size={2}>
          <Col
            size={2}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.SecRowNumView}>
              <Text style={styles.SecRowNum}>{flow}</Text>
              <Text style={styles.superText}>l/m</Text>
            </View>
            <Text style={styles.SecRowText}>flo</Text>
          </Col>
          <Col
            size={2}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.SecRowNumView}>
              <Text style={styles.SecRowNum}>{current}</Text>
              <Text style={styles.superText}>ml/s</Text>
            </View>
            <Text style={styles.SecRowText}>current</Text>
          </Col>
          <Col
            size={2}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.SecRowNumView}>
              <Text style={styles.SecRowNum}>{Total}</Text>
              <Text style={styles.superText}>ml</Text>
            </View>
            <Text style={styles.SecRowText}>Total</Text>
          </Col>
        </Row>
      </Grid>
    </View>
  );
};

export const TabScreen = createMaterialTopTabNavigator(
  {
    Current: {
      screen: Graphs,
    },
    Five: {screen: Fiveweeks},
    Ten: {screen: Tenweeks},
    Fifteen: {screen: Fifteenweeks},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: 'grey',
      activeTintBackgroundColor: '#11D58E',
      style: {
        backgroundColor: '#11D58E',
        marginTop: 30,
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  },
);
const TabApps = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      header: null,
      headerMode: 'none',
    },
  },
});
const PlantDetails = createBottomTabNavigator(
  {
    stats: {screen: PlantDetail},
    Graph: {screen: TabApps},
  },
  {
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: 'gray',
      activeBackgroundColor: '#0AD48B',
      labelStyle: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 15,
        textTransform: 'uppercase',
      },
    },
  },
);
export default PlantDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  ColTree: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#11df8e',
  },
  ColTreeImg: {
    width: 400,
    height: 350,
    resizeMode: 'contain',
    position: 'relative',
    top: 60,
  },
  Col: {
    backgroundColor: '#11df8e',
    alignItems: 'flex-end',
  },
  iconDiv: {
    marginTop: 20,
    //backgroundColor: '#05AC72',
    backgroundColor: 'white',
    width: 80,
    height: 35,
    opacity: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  fruitView: {
    marginRight: 15,
    marginTop: 10,
  },
  fruitViewText: {
    color: '#FFFFFF',
    opacity: 1,
    letterSpacing: 0,
    fontSize: 28,
    fontWeight: 'bold',
  },
  WeekView: {
    backgroundColor: '#05AC72',
    width: 180,
    opacity: 1,
    height: 'auto',
  },
  WeekTextView: {
    color: '#FFFFFF',
    textAlign: 'right',
    marginRight: 13,
  },
  TempView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: 120,
    marginRight: 20,
  },
  TempNum: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 28,
  },
  SecRowNumView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 30,
  },
  SecRowNum: {
    color: '#707070',
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 30,
  },
  SecRowText: {
    color: '#AFACAC',
    opacity: 1,
    letterSpacing: 0,
  },
  superText: {
    fontSize: 15,
    lineHeight: 15,
  },
  TempText: {
    color: '#FFFFFF',
    opacity: 1,
    letterSpacing: 1,
  },
  Circle: {
    borderRadius: 50,
    borderColor: '#ffffff',
    marginTop: 5,
    width: 35,
    height: 35,
    borderWidth: 2,
  },
  TempCircle: {
    backgroundColor: '#FF5858',
  },
  MosCircle: {
    backgroundColor: '#FAE200',
  },
  HumCircle: {
    backgroundColor: '#AFACAC',
  },
});
