import React from 'react';
import { Button } from 'antd-mobile-rn';
import { createStackNavigator } from 'react-navigation';
import App from '../main/App'
import Login from '../login/login'
import SignUp from '../login/signUp'
import Password from '../login/password'
import TransScreen from '../login/transScreen'
import Scan from '../config/scan'
import Info from '../config/info'
import Config from '../config/config'
import Active from '../config/active'
import Service from '../config/service'
import CompanyService from '../config/companyService'
import LocalService from '../config/localService'
import ScanCode from '../config/scanCode'

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
      navigationOptions: () => ({
        headerTitle: '选择类型',
      })
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: ({}) => ({
        headerTitle: '用户注册',
      })
    },
    Info: {
      screen: Info,
      navigationOptions: ({}) => ({
        headerTitle: '单位信息',
      })
    },
    Scan: {
      screen: Scan,
      navigationOptions: ({navigation}) => ({
        headerTitle: '扫描',
        headerRight: (
          <Button activeStyle={{backgroundColor:'grey',borderColor:'white'}} onClick={()=> {navigation.navigate('ScanCode')}}>添加</Button>      
        ),
      })
    },
    ScanCode: {
      screen: ScanCode,
      navigationOptions: ({}) => ({
        headerTitle: '输入二维码',
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
    CompanyService: {
      screen: CompanyService,
      navigationOptions: ({}) => ({
        headerTitle: '服务器地址',
      })
    },
    LocalService: {
      screen: LocalService,
      navigationOptions: ({}) => ({
        headerTitle: '服务器地址',
      })
    },
    TransScreen: {
      screen: TransScreen,
      navigationOptions: ({}) => ({
        header: null
      })
    },
  },
  {
    initialRouteName: 'TransScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
        fontSize: 16
      },
    },
  }
);