import React from 'react';
import { TabBar } from 'antd-mobile-rn';
import Home from './home/home'
import Msg from './msg'
import Map from './map'
import Count from './count'
import User from './user/user'
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
  ChangeTab () {
    if(this.state.selectedTab==='home') {
      return (<Home />)
    } else if (this.state.selectedTab==='msg') {
      return (<Msg />)
    } else if (this.state.selectedTab==='map') {
      return (<Map/>)
    } else if (this.state.selectedTab==='count') {
      return (<Count/>)
    }else if (this.state.selectedTab==='user') {
      return (<User navigation={this.props.navigation}/>)
    }
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
          icon={require('../img/home.png')}
          selectedIcon={require('../img/homeA.png')}
          selected={this.state.selectedTab === 'home'}
          onPress={() => this.onChangeTab('home')}
        >
          <Home />
        </TabBar.Item>
        <TabBar.Item
          icon={require('../img/message.png')}
          selectedIcon={require('../img/messageA.png')}
          title="消息"
          badge={this.props.count}
          selected={this.state.selectedTab === 'msg'}
          onPress={() => this.onChangeTab('msg')}
        >
          <Msg />
        </TabBar.Item>
        <TabBar.Item
          icon={require('../img/map.png')}
          selectedIcon={require('../img/mapA.png')}
          title="地图"
          selected={this.state.selectedTab === 'map'}
          onPress={() => this.onChangeTab('map')}
        >
          <Map />
        </TabBar.Item>
        <TabBar.Item
          title="统计"
          icon={require('../img/count.png')}
          selectedIcon={require('../img/countA.png')}
          selected={this.state.selectedTab === 'count'}
          onPress={() => this.onChangeTab('count')}
        >
          <Count />
        </TabBar.Item>
        <TabBar.Item
          icon={require('../img/user.png')}
          selectedIcon={require('../img/userA.png')}
          title="我的"
          selected={this.state.selectedTab === 'user'}
          onPress={() => this.onChangeTab('user')}
        >
          {this.ChangeTab()}
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