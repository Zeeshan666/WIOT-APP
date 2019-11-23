import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Footer, FooterTab, Button, Text} from 'native-base';
export default class FooterExample extends Component {
  shoot = () => {
    var a = new Date();
    var z = a.getUTCDate();
    var m = a.getFullYear();
    alert('date is  ' + z + '/' + m);
  };
  render() {
    return (
      <Footer>
        <FooterTab style={styles.Footer}>
          <Button full onPress={this.shoot}>
            <Text>zeekomo</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  Footer: {
    backgroundColor: '#512DA8',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
