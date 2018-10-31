import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Button, WingBlank, InputItem } from 'antd-mobile-rn';
import { AsyncStorage } from "react-native"

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: false,
      user: '',
      password: '',
      loging: false
    };
  }
  onSwitchChange = (value: any) => {
    this.setState({
      checked: value,
    });
  }
  login =  ()=> {
    this.setState({
      loging: true
    })
    console.log(this.state.user,'用户账号')
    fetch("https://www.easy-mock.com/mock/5bd802cefbc6d6477d96f9bf/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: this.state.user,
        password: this.state.password
      })
    }).then((data)=>{
      console.log(data,'登陆成功')
      this.props.navigation.navigate('Active')
      this.setState({
        loging: false
      })
      AsyncStorage.setItem('token','123')
    }).catch((err)=>{
      console.error(err)
      this.setState({
        loging: false
      })
    })
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={{height: 200,width: '100%'}}
          source={require('../img/Koala.jpg')}
        />
        <WingBlank style={{flex:1}}> 
          <View style={{marginTop:20}}>
            <InputItem
              placeholder="邮件或手机号码"
              style={{backgroundColor:'white',padding:10}}
              onChange={(value) => {
                this.setState({
                  user: value
                });
              }}
            >
              <Image
                source={require('../img/user.png')}
              />
            </InputItem>
            <InputItem
              type="password"
              placeholder="输入密码"
              style={{backgroundColor:'white',padding:10}}
              onChange={(value) => {
                this.setState({
                  password: value
                });
              }}
            >
              <Image
                source={require('../img/password.png')}
              />
            </InputItem>
            <Button type='primary' style={{marginTop:40}} activeStyle={{backgroundColor:'grey'}} onClick={this.login} disabled={this.state.loging}>登录</Button>
            <View style={{marginTop:20,justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
              <Button style={{borderWidth:0}} activeStyle={{backgroundColor:'white'}} onClick={() => {this.props.navigation.navigate('Service')}}>注册账号</Button>
              <Button style={{borderWidth:0}} activeStyle={{backgroundColor:'white'}} onClick={() => {this.props.navigation.navigate('Password')}}>忘记密码？</Button>         
            </View>
          </View>
          <View style={{justifyContent:'center',flexDirection:'row',marginTop:40,alignItems:'center'}}>
            <Text style={{flex:1,backgroundColor:'black',height:1}}></Text>
            <Text>其他方式登录</Text>
            <Text style={{flex:1,backgroundColor:'black',height:1}}></Text>
          </View>   
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <Image
              style={{width:40,height:40,marginRight:20}}
              source={require('../img/QQ.jpeg')}
            />
            <Image
              style={{width:40,height:40,marginLeft:20}}
              source={require('../img/wechat.jpeg')}
            />
          </View>
          <Button type='primary' style={{marginTop:40}} activeStyle={{backgroundColor:'grey'}} onClick={()=>{this.props.navigation.navigate('Main')}}>登录</Button>
        </WingBlank>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default App