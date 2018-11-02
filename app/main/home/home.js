import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableNativeFeedback } from 'react-native';
import Tabs from './tabs'


export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      isShow: false,
    };
  }
  shwoMenu () {
    return (
      <View style={styles.rec}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#455a64')}
          onPress={()=>{
            this.setState({
            isShow:false,
          })}}
          >
          <View>
            <Text style={{padding:10}}>全部</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#455a64')}
          onPress={()=>{
            this.setState({
            isShow:false
          })}}
          >
          <View>
            <Text style={{padding:10}}>服务类型</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <Text style={styles.title}>环宇通大酒楼</Text>
        {this.state.isShow?this.shwoMenu():null}
        <View style={{position:'absolute',right:10}}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#455a64')}
            onPress={()=>{
              let check = this.state.isShow
              this.setState({
              isShow:!check
            })}}
            >
            <View>
              <Image
                style={{height: 30,width: 30,margin: 12}}
                source={require('../../img/menu.png')}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-around',marginTop:10}}>
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
        <View style={{flex: 1}}>
          <Tabs />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    padding: 14,
    backgroundColor: '#1e88e5',
    fontWeight: 'bold',
    color: 'white'
  },
  rec: {
    width:160,
    borderRadius: 4,
    elevation: 200,
    backgroundColor:'white',
    position:'absolute',
    right:10,
    top:56,
    zIndex:1000
  }
});
