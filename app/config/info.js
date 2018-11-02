import React, {Component} from 'react';
import {  PixelRatio, TouchableOpacity,StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native';
import { WingBlank, InputItem } from 'antd-mobile-rn';
import ImagePicker from 'react-native-image-picker';

export default class App extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
          files: [],
          avatarSource: null,
        };
    }
    selectPhotoTapped() {
      const options = {
        title: '选择图片',
        cancelButtonTitle: '取消',
        takePhotoButtonTitle: '拍照',
        chooseFromLibraryButtonTitle: '从相册中选择',
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };
  
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri };
  
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
  
          this.setState({
            avatarSource: source
          });
        }
      });
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
          <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
              <View style={[styles.avatar, styles.avatarContainer]}>
              { this.state.avatarSource === null ? <Text style={{textAlign:'center'}}>单击选择单位的表示图标显示在登录界面</Text> :
                <Image style={styles.avatar} source={this.state.avatarSource} />
              }
              </View>
            </TouchableOpacity>
          </View>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('Main')}
            background={TouchableNativeFeedback.Ripple('#455a64')}>
            <View style={{width: '100%', height: 50, backgroundColor: '#2196f3',borderRadius:10,justifyContent:'center', marginTop:20}}>
              <Text style={{fontSize:18,color:'white',textAlign:'center'}}>创建</Text>
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
  text: {
      fontSize: 18,
      marginTop: 10
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 100,
    width: 200,
    height: 200
  }
});
