import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Tabs } from 'antd-mobile-rn';

export default class BasicTabsExample extends React.Component<any, any> {
  render() {
    const tabs = [
      { title: '最新' },
      { title: '服务' },
      { title: '点菜' },
      { title: '买单' },
    ];
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
      flex: 1,
    } 
    return (
      <View style={styles.container}>
        <Text style={styles.title}>信息</Text>
        <Tabs tabs={tabs} initialPage={0}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        padding: 14,
        backgroundColor: '#64b5f6',
        fontWeight: 'bold',
        color: 'white'
    },
})