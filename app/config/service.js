import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { WingBlank } from 'antd-mobile-rn';

export default class App extends Component {

  onSwitchChange = (value: any) => {
  }
  render() {
    return (
      <View style={styles.container}>
        <WingBlank style={{marginTop:20}}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('Scan')}
            background={TouchableNativeFeedback.Ripple('#455a64')}>
            <View style={{width: '100%', height: 50, backgroundColor: '#ffd600',borderRadius:10,justifyContent:'center', marginTop:20}}>
              <Text style={{fontSize:18,color:'white',textAlign:'center',fontWeight:'bold'}}>默认服务器</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('CompanyService')}
            background={TouchableNativeFeedback.Ripple('#455a64')}>
            <View style={{width: '100%', height: 50, backgroundColor: '#2196f3',borderRadius:10,justifyContent:'center', marginTop:20}}>
              <Text style={{fontSize:18,color:'white',textAlign:'center',fontWeight:'bold'}}>企业服务器</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('LocalService')}
            background={TouchableNativeFeedback.Ripple('#455a64')}>
            <View style={{width: '100%', height: 50, backgroundColor: '#00e676',borderRadius:10,justifyContent:'center', marginTop:20}}>
              <Text style={{fontSize:18,color:'white',textAlign:'center',fontWeight:'bold'}}>本地服务器</Text>
            </View>
          </TouchableNativeFeedback>
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
