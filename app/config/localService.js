import React, {Component} from 'react';
import {StyleSheet, Text, View,  Image, TouchableNativeFeedback } from 'react-native';
import { Button, WingBlank, InputItem } from 'antd-mobile-rn';

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
          <Text style={{fontSize:16}}>服务器序列号：</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
            <InputItem
            type="phone"
            placeholder='请输入服务器IP地址或则扫描登录'
            style={{padding:10,flex:1}}
            >
            </InputItem>
            <View>
              <Image
              style={{height: 50,width: 50}}
              source={require('../img/scan.png')}
              />
              <Button style={{position:'absolute',width:50,height:50,backgroundColor:'transparent'}}
              activeStyle={{backgroundColor:'transparent'}}
              onClick={()=>this.props.navigation.navigate('Scan')}></Button>
            </View>
          </View>
          <Text style={{fontSize:16}}>账号：</Text>
          <InputItem
            type="phone"
            placeholder="请输入用户账号"
            style={{padding:10,marginTop:10}}
          >
          </InputItem>
          <Text style={{fontSize:16}}>密码：</Text>
          <InputItem
            type="password"
            placeholder="请输入密码"
            style={{padding:10,marginTop:10}}
          >
          </InputItem>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('Active')}
            background={TouchableNativeFeedback.Ripple('#455a64')}>
            <View style={{width: '100%', height: 50, backgroundColor: '#2196f3',borderRadius:10,justifyContent:'center', marginTop:40}}>
              <Text style={{fontSize:18,color:'white',textAlign:'center'}}>确认</Text>
            </View>
          </TouchableNativeFeedback>
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
