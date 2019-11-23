import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Header, Title, Button, Left, Right, Body, Icon} from 'native-base';
export default class Headnative extends Component {
  render() {
    return (
      <Header style={styles.header} androidStatusBarColor="pink">
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title style={styles.text}>zeekomo</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    alignItems: 'center',
  },
});
