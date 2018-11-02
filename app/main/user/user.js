import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { List,Button } from 'antd-mobile-rn';
const Item = List.Item;


export default class App extends Component {
  render() {
    let size = 18
    return (
      <View style={styles.container}>
        <Text style={styles.title}>用户中心</Text>
        <List style={{marginTop:40}}>
          <Item>
            <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
              <Text style={{fontSize: size}}>账号：</Text>
              <Text style={{fontSize: size}}>{1103140704}</Text>
            </View>
          </Item>
          <Item>
            <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
              <Text style={{fontSize: size}}>手机号：</Text>
              <Text style={{fontSize: size}}>{15061883830}</Text>
            </View>
          </Item>
          <Item disabled arrow="horizontal" onClick={() => {this.props.navigation.navigate('Login')}}>
            <Text style={{fontSize: size}}>帮助</Text>
          </Item>
          <Item disabled arrow="horizontal" onClick={() => {this.props.navigation.navigate('Login')}}>
            <Text style={{fontSize: size}}>修改密码</Text>
          </Item>
          <Item disabled arrow="horizontal" onClick={() => {this.props.navigation.navigate('Login')}}>
            <Text style={{fontSize: size}}>检查更新</Text>
          </Item>
        </List>
        <TouchableNativeFeedback
          onPress={() => {this.props.navigation.navigate('Login')}}
          background={TouchableNativeFeedback.Ripple('#455a64')}>
          <View style={{width: '90%', height: 50, backgroundColor: '#2196f3',borderRadius:10,justifyContent:'center',marginHorizontal:'5%',marginVertical:40}}>
            <Text style={{fontSize:18,color:'white',textAlign:'center'}}>退出登陆</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    padding: 14,
    backgroundColor: '#1e88e5',
    fontWeight: 'bold',
    color: 'white'
  },
});
