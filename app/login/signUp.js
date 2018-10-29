import React, {Component} from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import { Button, WingBlank, InputItem, Switch} from 'antd-mobile-rn';

export default class App extends Component {

  onSwitchChange = (value: any) => {
  }
  render() {
    return (
      <View style={styles.container}>
        <WingBlank style={{marginTop:20}}>   
          <View style={{marginTop:20}}>
            <InputItem
              type='phone'
              placeholder="请输入手机号码"
              style={{backgroundColor:'white',padding:10}}
            >
              <Text>+86</Text>
            </InputItem>
              <InputItem
                type='phone'
                placeholder='请输入手机验证码'
                style={{backgroundColor:'white',padding:10}}
                extra='获取验证码'
                onExtraClick={()=>{console.log('获得了验证码')}}
              >
              </InputItem>
            <InputItem
              type="password"
              placeholder="请输入密码"
              style={{backgroundColor:'white',padding:10}}
            >
            </InputItem>
            <InputItem
              type="password"
              placeholder="请再次输入密码"
              style={{backgroundColor:'white',padding:10}}
            >
            </InputItem>
          </View>
          <Button type='primary' style={{marginTop: 20}} activeStyle={{backgroundColor:'grey'}} onClick={() => {}}>注册</Button>
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
