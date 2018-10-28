import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image } from 'react-native';
import { Popover, } from 'antd-mobile-rn';
import Tabs from './tabs'

const Item = Popover.Item;

export default class App extends Component {
  render() {
    let overlay = [1, 2, 3].map((i, index) => (
      <Item key={index} value={`option ${i}`}>
        <Text>option {i}</Text>
      </Item>
    ));
    overlay = overlay.concat([
      <Item key="4" value="disabled" disabled>
        <Text style={{ color: '#ddd' }}>disabled opt</Text>
      </Item>,
      <Item key="6" value="button ct" style={{ backgroundColor: '#efeff4' }}>
        <Text>关闭</Text>
      </Item>,
    ]);
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row',backgroundColor: '#64b5f6',alignItems: 'center',height: 50,justifyContent: 'space-between',zIndex: 10000}}>
          <View><Text style={styles.title}>环宇通大酒楼</Text></View>
          <View>
            <Popover
              name="m"
              overlay={overlay}
              contextStyle={styles.contextStyle}
              // tslint:disable-next-line:jsx-no-multiline-js
              overlayStyle={[
                styles.overlayStyle,
                Platform.OS === 'android' && styles.androidOverlayStyle,
              ]}
              triggerStyle={styles.triggerStyle}
              onSelect={this.onSelect}
            >
              <Image
                style={{height: 30,width: 30,margin: 10}}
                source={require('../../img/menu.png')}
              />
            </Popover>
          </View>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-around',padding: 4}}>
          <View>
            <Image
              style={{height: 60,width: 60,borderRadius: 30}}
              source={require('../../img/Koala.jpg')}
            />
            <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-around'}}>
              <Text>
                张三丰
              </Text>
              <View style={{backgroundColor: '#76ff03',borderRadius: 20}}>
                <Text style={{padding: 4,paddingLeft: 6,paddingRight:6,fontSize: 10,}}>
                  {'在岗'}
                </Text>
              </View>
            </View>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 40,color: 'red'}}>8</Text>
            <Text>服务</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 40,color: 'blue'}}>8</Text>
            <Text>服务</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 40,color: '#76ff03'}}>8</Text>
            <Text>服务</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
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
    flex: 1
  },
  title: {
    fontSize: 20,
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
  // 在 iOS 上弹出层有阴影，Android 上没有，
  // 详细：http://facebook.github.io/react-native/releases/0.39/docs/shadow-props.html#shadowcolor
  androidOverlayStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
