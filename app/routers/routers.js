import { createStackNavigator } from 'react-navigation';
import React from 'react'
import { Button } from 'antd-mobile-rn';
import App from '../main/App'
import Login from '../login/login'
import Config from '../login/config'
import SignUp from '../login/signUp'
import Scan from '../login/scan'
import Password from '../login/password'

export default createStackNavigator(
  {
    Main: {
      screen: App,
      navigationOptions: ({}) => ({
          header: null
      })
    },
    Login: {
      screen: Login,
      navigationOptions: ({}) => ({
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
      navigationOptions: ({}) => ({
        headerTitle: '用户注册',
      })
    },
    Scan: {
      screen: Scan,
      navigationOptions: ({}) => ({
        headerTitle: '扫描',
      })
    },
    Password: {
      screen: Password,
      navigationOptions: ({}) => ({
        headerTitle: '找回密码',
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