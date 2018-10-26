import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView } from 'react-native';
import { List, Button, WingBlank } from 'antd-mobile-rn';

const Item = List.Item;


export default class App extends Component {
  render() {
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
            <Item data-seed="logId">
              账号：
            </Item>
            <Item wrap>
              手机号：
            </Item>
            <Item disabled arrow="horizontal" onClick={() => {}}>
              帮助
            </Item>
            <Item disabled arrow="horizontal" onClick={() => {}}>
              修改密码
            </Item>
            <Item disabled arrow="horizontal" onClick={() => {}}>
              检查更新
            </Item>
          </List>
          <WingBlank>
            <Button type="primary" style={{marginTop: 200}}>退出账号</Button>
          </WingBlank>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
    padding: 14,
    backgroundColor: '#64b5f6',
    fontWeight: 'bold',
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
