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
              style={{padding:10}}
            >
              <Text>+86</Text>
            </InputItem>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:10}}>
              <InputItem
                placeholder='请输入手机验证码'
                style={{padding:10,flex:1}}
              >
              </InputItem>
              <Button type='primary' activeStyle={{backgroundColor:'grey'}}>获取验证码</Button>
              </View>
            <InputItem
              type="password"
              placeholder="请输入密码"
              style={{padding:10,}}
            >
            </InputItem>
            <InputItem
              type="password"
              placeholder="请再次输入密码"
              style={{padding:10,marginTop:10}}
            >
            </InputItem>
          </View>
          <Button type='primary' style={{marginTop: 40}} activeStyle={{backgroundColor:'grey'}} onClick={() => {}}>确认</Button>
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
