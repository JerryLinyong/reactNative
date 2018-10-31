import React, {Component} from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import { Button, WingBlank, InputItem, ImagePicker} from 'antd-mobile-rn';

export default class App extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
          files: [],
        };
      }
  onSwitchChange = (value: any) => {
  }
  render() {
    const size = 18
    return (
      <View style={styles.container}>
        <WingBlank style={{marginTop:20}}>   
            <Text style={styles.text}>公司名称：</Text>
            <InputItem
              placeholder="请输入详细公司名称"
            >
            </InputItem>
            <Text style={styles.text}>简称</Text>
            <InputItem
                placeholder='请输入公司中文或英文简称'
            >
            </InputItem>
            <Text style={styles.text}>标识图片</Text>
            <View style={{marginTop:20,alignItems:'center'}}>
              <ImagePicker
                onChange={this.handleFileChange}
                files={this.state.files}
                style={{flex:1}}
              />
            </View>
          <Button type='primary' style={{marginTop: 40}} activeStyle={{backgroundColor:'grey'}} onClick={() => {this.props.navigation.navigate('Main')}}>创建</Button>
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
  text: {
      fontSize: 18,
      marginTop: 10
  }
});
