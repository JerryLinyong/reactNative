import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { List, Button, WingBlank, Carousel } from 'antd-mobile-rn';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{height: 200,width: '100%'}}
          source={require('./img/Koala.jpg')}
        />
        <WingBlank>
          <Button style={{marginTop: 40}} activeStyle={{opacity: 0.3}}>默认登陆位置</Button>
        </WingBlank>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
