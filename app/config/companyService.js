import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Button, WingBlank, InputItem, } from 'antd-mobile-rn';

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      sended: false,
      time: 59
    };
  }

  getCode = () => {
    this.setState({
      sended: true,
      time: 59
    })
    let timer = setInterval(()=>{
      this.setState({
        time: this.state.time-1
      })
    },1000)
    setTimeout(()=>{
      this.setState({
        sended: false
      })
      clearInterval(timer)
    },60000)
  }
  render() {
    return (
      <View style={styles.container}>
        <WingBlank style={{marginTop:40}}>   
          <InputItem
            placeholder='请输入需要连接点服务器地址'
            style={{padding:10,flex:1}}
            >
            </InputItem>
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
              <Button type='primary' activeStyle={{backgroundColor:'grey'}} onClick={this.getCode} disabled={this.state.sended}>{this.state.sended?'请等待'+this.state.time+'s':'获取验证码'}</Button>
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
          <Button type='primary' style={{marginTop: 40}} activeStyle={{backgroundColor:'grey'}} onClick={() => {this.props.navigation.navigate('Active')}}>确认</Button>
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
