import React from 'react';
import { View, Text } from 'react-native';
import { TabBar } from 'antd-mobile-rn';
import Home from './components/home'
import Msg from './components/msg'
import Map from './components/map'
import Count from './components/count'
import Mine from './components/mine'
import Manage from './components/manage'

export default class BasicTabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#ccc"
      >
        <TabBar.Item
          title="首页"
          icon={require('./img/alipay.png')}
          selectedIcon={require('./img/alipay_sel.png')}
          selected={this.state.selectedTab === 'home'}
          onPress={() => this.onChangeTab('home')}
        >
          <Home />
        </TabBar.Item>
        <TabBar.Item
          icon={require('./img/koubei.png')}
          selectedIcon={require('./img/koubei_sel.png')}
          title="消息"
          badge={2}
          selected={this.state.selectedTab === 'msg'}
          onPress={() => this.onChangeTab('msg')}
        >
          <Msg />
        </TabBar.Item>
        <TabBar.Item
          icon={require('./img/friend.png')}
          selectedIcon={require('./img/friend_sel.png')}
          title="地图"
          selected={this.state.selectedTab === 'map'}
          onPress={() => this.onChangeTab('map')}
        >
          <Map />
        </TabBar.Item>
        <TabBar.Item
          title="统计"
          icon={require('./img/alipay.png')}
          selectedIcon={require('./img/alipay_sel.png')}
          selected={this.state.selectedTab === 'count'}
          onPress={() => this.onChangeTab('count')}
        >
          <Count />
        </TabBar.Item>
        <TabBar.Item
          title="管理"
          icon={require('./img/alipay.png')}
          selectedIcon={require('./img/alipay_sel.png')}
          selected={this.state.selectedTab === 'manage'}
          onPress={() => this.onChangeTab('manage')}
        >
          <Manage />
        </TabBar.Item>
        <TabBar.Item
          icon={require('./img/busi.png')}
          selectedIcon={require('./img/busi_sel.png')}
          title="我的"
          selected={this.state.selectedTab === 'mine'}
          onPress={() => this.onChangeTab('mine')}
        >
          <Mine />
        </TabBar.Item>
      </TabBar>
    );
  }
}