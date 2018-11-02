import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { WingBlank, InputItem } from 'antd-mobile-rn';

export default class App extends Component {

  onSwitchChange = (value: any) => {
  }
  render() {
    return (
      <View style={styles.container}>
        <WingBlank style={{marginTop:40}}>
          <Text style={{textAlign:'center',fontSize: 18}}>请输入二维码</Text>
          <InputItem
            type="phone"
            placeholder='请输入二维码序列号'
            style={{padding:10,flex:1,marginTop:20}}
            >
          </InputItem>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('Main')}
            background={TouchableNativeFeedback.Ripple('#455a64')}>
            <View style={{width: '100%', height: 50, backgroundColor: '#2196f3',borderRadius:10,justifyContent:'center', marginTop:20}}>
              <Text style={{fontSize:18,color:'white',textAlign:'center'}}>确认</Text>
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
