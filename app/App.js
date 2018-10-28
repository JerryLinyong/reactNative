import React from 'react';
import { TabBar } from 'antd-mobile-rn';
import Home from './components/home/home'
import Msg from './components/msg'
import Map from './components/map'
import Count from './components/count'
import User from './components/user/user'
import { connect } from 'react-redux'

class App extends React.Component {
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
    let navigation = this.props.navigation
    console.log(this.props)
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#ccc"
      >
        <TabBar.Item
          title="首页"
          icon={require('./img/home.png')}
          selected={this.state.selectedTab === 'home'}
          onPress={() => this.onChangeTab('home')}
        >
          <Home />
        </TabBar.Item>
        <TabBar.Item
          icon={require('./img/message.png')}
          title="消息"
          badge={this.props.count}
          selected={this.state.selectedTab === 'msg'}
          onPress={() => this.onChangeTab('msg')}
        >
          <Msg />
        </TabBar.Item>
        <TabBar.Item
          icon={require('./img/map.png')}
          title="地图"
          selected={this.state.selectedTab === 'map'}
          onPress={() => this.onChangeTab('map')}
        >
          <Map />
        </TabBar.Item>
        <TabBar.Item
          title="统计"
          icon={require('./img/count.png')}
          selected={this.state.selectedTab === 'count'}
          onPress={() => this.onChangeTab('count')}
        >
          <Count />
        </TabBar.Item>
        <TabBar.Item
          icon={require('./img/user.png')}
          title="我的"
          selected={this.state.selectedTab === 'user'}
          onPress={() => this.onChangeTab('user')}
        >
          <User navigation={navigation}/>
        </TabBar.Item>
      </TabBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
  }
}

export default connect(mapStateToProps)(App)