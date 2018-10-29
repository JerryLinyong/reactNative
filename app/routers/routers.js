import { createStackNavigator } from 'react-navigation';
import App from '../main/App'
import Login from '../login/login'
import Config from '../login/config'
import React from "react";
import { Text, View, Image } from "react-native";

class Title extends React.Component {
  render() {
    return (
      <View style={{width: '100%',paddingLeft:'10%',justifyContent: 'space-between',flexDirection: 'row',alignItems:'center'}}>
        <Text style={{fontSize: 20}}>环宇通</Text>
        <View style={{flexDirection: 'row',paddingHorizontal:20}}>
          <Image source={require("../img/search.png")} />
          <Image source={require("../img/plus.png")} />
        </View>
      </View>
    );
  }
}


export default createStackNavigator({
  Main: App,
  Login: Login,
  Config: Config
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitle: <Title />,
    },
  }
);