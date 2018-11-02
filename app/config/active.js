import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native';
import { Button, WingBlank, InputItem, Switch} from 'antd-mobile-rn';

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <WingBlank style={{marginTop:20}}> 
          <Text style={{textAlign:'center',fontSize:18,color:'red'}}>该账号尚未开通，未能生效</Text>
          <View style={{alignItems:'center',marginTop:20}}>
            <Image
              style={{height: 220,width: 220}}
              source={require('../img/Koala.jpg')}
            />
            <View style={{width: '80%',marginTop:20,borderColor:'grey',borderWidth:1,borderStyle:'solid',borderRadius: 10,padding:10}}>
              <Text style={{fontSize: 16,color: 'grey'}}>将此二维码分享给管理员或者由管理员扫描加入到指定单位。</Text>
            </View>
          </View>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('')}
            background={TouchableNativeFeedback.Ripple('#455a64')}>
            <View style={{width: '100%', height: 50, backgroundColor: '#ff5722',borderRadius:10,justifyContent:'center', marginTop:20}}>
              <Text style={{fontSize:18,color:'white',textAlign:'center'}}>通过微信或QQ分享</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('Info')}
            background={TouchableNativeFeedback.Ripple('#455a64')}>
            <View style={{width: '100%', height: 50, backgroundColor: '#2196f3',borderRadius:10,justifyContent:'center', marginTop:20}}>
              <Text style={{fontSize:18,color:'white',textAlign:'center'}}>创建组织结构</Text>
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
