import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Button, WingBlank } from 'antd-mobile-rn';

export default class App extends Component {

  onSwitchChange = (value: any) => {
  }
  render() {
    return (
      <View style={styles.container}>
        <WingBlank style={{marginTop:40}}>
          <Button style={{marginTop: 20,backgroundColor:'#ffd600'}} activeStyle={{backgroundColor:'grey'}} onClick={()=> {this.props.navigation.navigate('Active')}}>默认服务器</Button>      
          <Button type='primary' style={{marginTop: 20}} activeStyle={{backgroundColor:'grey'}} onClick={() => {this.props.navigation.navigate('CompanyService')}}>企业服务器</Button>
          <Button style={{marginTop: 20,backgroundColor:'#00e676'}} activeStyle={{backgroundColor:'grey'}} onClick={() => {this.props.navigation.navigate('LocalService')}}>本地服务器</Button>
          <View style={{marginTop:40,borderColor:'grey',borderWidth:1,borderStyle:'solid',padding:10}}>
            <Text>请您选择网络配置地址:</Text>
            <Text>    默认服务器：我司云平台</Text>
            <Text>    企业服务器：客户自行部署的平台</Text>
            <Text>    本地服务器：客户局域网内安装点用户端平台，APP必须和当前用户端平台在同一个局域网内，方可使用</Text>
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
