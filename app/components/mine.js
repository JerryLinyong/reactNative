import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { List, Button, WingBlank, Carousel } from 'antd-mobile-rn';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{height: 200,width: 400,marginTop: 40}}
          resizeMode='stretch'
          source={require('./Koala.jpg')}
        />
        <WingBlank>
          <Button style={{marginTop: 40}}>默认登陆位置</Button>
        </WingBlank>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});
