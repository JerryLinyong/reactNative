import React, {Component} from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
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
          <Button type='primary' style={{marginTop: 20}} activeStyle={{backgroundColor:'grey'}} onClick={() => {}}>通过微信或QQ分享</Button>
          <Button type='primary' style={{marginTop: 20,backgroundColor: '#64b5f6'}} activeStyle={{backgroundColor:'grey'}} onClick={() => {this.props.navigation.navigate('Config')}}>创建组织结构</Button>
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
