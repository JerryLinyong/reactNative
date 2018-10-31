import React, {Component} from 'react';
import { AsyncStorage, View } from "react-native"

class App extends Component {
  componentWillMount(){
    AsyncStorage.getItem("token", (err, result) => {
      if(result==='123'){
        this.props.navigation.navigate('Login')
      } else {
        this.props.navigation.navigate('Main')
      }
    });
  }
  render() {
    return (
        <View></View>
    )
  }
}

export default App