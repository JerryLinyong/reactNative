import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Animated, Easing } from 'react-native';
import { RNCamera } from 'react-native-camera'


class ScanScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
          moveAnim: new Animated.Value(0)
      };
  }

  componentDidMount() {
      this.startAnimation();
  }

  startAnimation = () => {
      this.state.moveAnim.setValue(0);
      Animated.timing(
          this.state.moveAnim,
          {
              toValue: -200,
              duration: 1500,
              easing: Easing.linear
          }
      ).start(() => this.startAnimation());
  };
  //  识别二维码
  onBarCodeRead = (result) => {
      const { navigate } = this.props.navigation;
             const {data} = result;
          navigate('Sale', {
              url: data
          })
  };

  render() {
      return (
        <View style={styles.container}>
            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                onBarCodeRead={this.onBarCodeRead}
            >
            <View style={styles.rectangleContainer}>
                <View style={styles.rectangle}/>
                <Animated.View style={[
                    styles.border,
                    {transform: [{translateY: this.state.moveAnim}]}]}/>
            </View>
            <Image
            style={{height: 120,width: '90%'}}
            source={require('../img/Koala.jpg')}
            />
            <Text style={styles.rectangleText}>请扫描设备机身或者说明书上的二维码进行设备添加</Text>
            </RNCamera>
        </View>
      );
  }
}

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row'
  },
  preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
  },
  rectangleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent'
  },
  rectangle: {
      height: 200,
      width: 200,
      borderWidth: 1,
      borderColor: '#00FF00',
      backgroundColor: 'transparent'
  },
  rectangleText: {
      flex: 0,
      color: '#fff',
      marginTop: 10,
      marginBottom: '10%',
      textAlign: 'center'
  },
  border: {
      flex: 0,
      width: 200,
      height: 2,
      backgroundColor: '#00FF00',
  }
});