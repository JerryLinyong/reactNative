import { createStackNavigator } from 'react-navigation';
import React from 'react'
import { Button } from 'antd-mobile-rn';
import App from '../main/App'
import Login from '../login/login'
import Config from '../login/config'
import SignUp from '../login/signUp'
import Scan from '../login/scan'
import Password from '../login/password'
import Active from '../login/active'
import Service from '../login/service'

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
    Active: {
      screen: Active,
      navigationOptions: ({}) => ({
        headerTitle: '开通账号',
      })
    },
    Service: {
      screen: Service,
      navigationOptions: ({}) => ({
        headerTitle: '服务器选择',
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