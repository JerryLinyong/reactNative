import React, {Component} from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import { Button, WingBlank, InputItem, Switch} from 'antd-mobile-rn';

export default class App extends Component {

  onSwitchChange = (value: any) => {
  }
  render() {
    return (
      <View style={styles.container}>
        <WingBlank style={{marginTop:40}}>
          <Button style={{marginTop: 20,backgroundColor:'#ffd600'}} activeStyle={{backgroundColor:'grey'}} onClick={()=> {}}>家庭版</Button>      
          <Button style={{marginTop: 20,backgroundColor:'#42a5f5'}} activeStyle={{backgroundColor:'grey'}} onClick={() => {}}>商业版</Button>
          <View style={{marginTop:40,borderColor:'black',borderWidth:1,borderStyle:'solid',padding:10}}>
            <Text>请你选择当前使用场景:</Text>
            <Text>    家庭版:适用于室内智能家居控制</Text>
            <Text>    商用版:适用于服务行业使用</Text>
          </View>
        </WingBlank>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
