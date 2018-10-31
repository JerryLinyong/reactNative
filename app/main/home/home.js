import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Popover, } from 'antd-mobile-rn';
import Tabs from './tabs'

const Item = Popover.Item;

export default class App extends Component {
  render() {
    let overlay =  [
      <Item key='0' value='all'>
        <Text>全部</Text>
      </Item>,
      <Item key='1' value='service'>
        <Text>服务类型</Text>
      </Item>
    ]
    return (
      <View style={styles.container}>
        <Text style={styles.title}>环宇通大酒楼</Text>
        <View style={{position:'absolute',right:0,zIndex:10000}}>
          <Popover
            overlay={overlay}
            overlayStyle={styles.overlayStyle}
            triggerStyle={styles.triggerStyle}
            onSelect={this.onSelect}
          >
            <Image
              style={{height: 30,width: 30,margin: 10}}
              source={require('../../img/menu.png')}
            />
          </Popover>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-around',marginTop:20}}>
          <View>
            <Image
              style={{height: 60,width: 60,borderRadius: 30}}
              source={require('../../img/Koala.jpg')}
            />
            <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
              <Text>
                张三丰
              </Text>
              <Text style={{backgroundColor: '#76ff03',borderRadius: 10,paddingHorizontal:4}}>
                {'在岗'}
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 40,color: 'red'}}>8</Text>
            <Text>服务</Text>
          </View>
          <View>
            <Text style={{fontSize: 40,color: 'blue'}}>8</Text>
            <Text>服务</Text>
          </View>
          <View>
            <Text style={{fontSize: 40,color: '#76ff03'}}>8</Text>
            <Text>服务</Text>
          </View>
          <View>
            <Text style={{fontSize: 40,color: 'brown'}}>8</Text>
            <Text>服务</Text>
          </View>
        </View>
        <View style={{flex: 1,backgroundColor: 'red'}}>
          <Tabs />
        </View>
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
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 400,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  triggerStyle: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  overlayStyle: {
    right: 10,
    marginTop: 50,
  },
});
