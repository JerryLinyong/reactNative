import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView } from 'react-native';
import { List,Button } from 'antd-mobile-rn';
const Item = List.Item;


export default class App extends Component {
  render() {
    let size = 18
    return (
      <View style={styles.container}>
        <Text style={styles.title}>用户中心</Text>
        <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
          <List renderHeader={() => ''}>
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
          <Button  onClick={() => {this.props.navigation.navigate('Login')}} type='primary' style={{margin: 40,marginVertical: 60}} activeStyle={{opacity: 0.3}}>退出登陆</Button>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    padding: 14,
    backgroundColor: '#64b5f6',
    fontWeight: 'bold',
    color: 'white'
  },
});
