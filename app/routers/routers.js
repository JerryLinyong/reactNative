import { createStackNavigator } from 'react-navigation';
import React from 'react'
import { Button } from 'antd-mobile-rn';
import App from '../main/App'
import Login from '../login/login'
import Config from '../login/config'
import SignUp from '../login/signUp'
import Scan from '../login/scan'

export default createStackNavigator(
  {
    Main: {
      screen: App,
      navigationOptions: ({navigation}) => ({
          header: null
      })
    },
    Login: {
      screen: Login,
      navigationOptions: ({navigation}) => ({
          header: null
      })
    },
    Config: {
      screen: Config,
      navigationOptions: ({navigation}) => ({
        headerTitle: '选择类型',
        headerRight: (<Button style={{borderWidth:0}} activeStyle={{backgroundColor:'white'}} onClick={()=>navigation.navigate('Scan')}>下一步</Button>)
      })
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: ({navigation}) => ({
        headerTitle: '用户组册',
      })
    },
    Scan: {
      screen: Scan,
      navigationOptions: ({navigation}) => ({
        headerTitle: '扫描',
      })
    },
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
      },
    },
  }
);