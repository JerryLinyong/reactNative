import React, {Component} from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import { Button, WingBlank, InputItem, Switch} from 'antd-mobile-rn';
import { connect } from 'react-redux'

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  onSwitchChange = (value: any) => {
    this.setState({
      checked: value,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{height: 200,width: '100%'}}
          source={require('../img/Koala.jpg')}
        />
        <WingBlank>
          <View style={{marginTop:20}}>
            <InputItem
              placeholder="邮件或手机号码"
              style={{backgroundColor:'white',padding:10}}
            >
              <Image
                source={require('../img/user.png')}
              />
            </InputItem>
            <InputItem
              type="password"
              placeholder="输入密码"
              style={{backgroundColor:'white',padding:10}}
            >
              <Image
                source={require('../img/password.png')}
              />
            </InputItem>
          </View>
          <Button type='primary' style={{marginTop: 20}} activeStyle={{backgroundColor:'grey'}} onClick={()=>this.props.navigation.navigate('Main')}>登陆</Button>      
          <Button style={{marginTop: 20,backgroundColor:'#bbdefb'}} activeStyle={{backgroundColor:'grey'}} onClick={() => {this.props.navigation.navigate('Config')}}>登陆配置选择</Button>
          <View style={{marginTop:20,marginHorizontal:20,justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
            <Button style={{borderWidth:0}} activeStyle={{backgroundColor:'white'}} onClick={() => {this.props.navigation.navigate('SignUp')}}>注册账号</Button>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontSize:16}}>记住密码</Text>
              <Switch
                checked={this.state.checked}
                onChange={this.onSwitchChange}
              />
            </View>
          </View>
          <View style={{justifyContent:'center',flexDirection:'row',marginTop:10}}>
            <Button size='small' style={{borderWidth:0}} activeStyle={{backgroundColor:'white'}} onClick={() => {this.props.navigation.navigate('Config')}}>忘记密码？</Button>
          </View>
          <View style={{justifyContent:'center',flexDirection:'row',marginTop:20,alignItems:'center'}}>
            <Text style={{flex:1,backgroundColor:'black',height:1}}></Text>
            <Text>其他方式登陆</Text>
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

const mapStateToProps = state => {
  return {
    isLogin: state.isLogin,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: ()=>{dispatch({type:'LOGIN'})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)