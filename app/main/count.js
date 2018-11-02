import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { Button, Drawer, List, WhiteSpace } from 'antd-mobile-rn';
import { connect } from 'react-redux'


class App extends React.Component {
  drawer: any;

  onOpenChange = (isOpen: any) => {
    /* tslint:disable: no-console */
    console.log('是否打开了 Drawer', isOpen.toString());
  }

  render() {
    const itemArr = Array.apply(null, Array(20))
      .map(function(_: any, i: any) {
        return i;
      })
      .map((_i: any, index: any) => {
        if (index === 0) {
          return (
            <List.Item
              key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              multipleLine
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text>Categories - {index}</Text>
                <Button
                  type="primary"
                  size="small"
                  onClick={() => this.drawer.closeDrawer()}
                >
                  close drawer
                </Button>
              </View>
            </List.Item>
          );
        }
        
        return (
          <List.Item
            key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
          >
            <Text>Categories - {index}</Text>
          </List.Item>
        );
      });
      
    // Todo: https://github.com/DefinitelyTyped/DefinitelyTyped
    const sidebar = (
      <ScrollView>
        <List>{itemArr}</List>
      </ScrollView>
    );
    console.log(this.props.deleteCount)
    return (
      <Drawer
        sidebar={sidebar}
        position="left"
        open={false}
        drawerRef={(el: any) => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#ccc"
      >
        <View style={{ flex: 1, marginTop: 114, padding: 8 }}>
          <Button onClick={() => this.drawer && this.drawer.openDrawer()}>
            Open drawer
          </Button>
          <WhiteSpace />
          <TouchableNativeFeedback
            onPress={this.props.deleteCount}
            background={TouchableNativeFeedback.Ripple('#455a64')}>
            <View style={{width: '100%', height: 50, backgroundColor: '#2196f3',borderRadius:10,justifyContent:'center'}}>
              <Text style={{fontSize:18,color:'white',textAlign:'center'}}>Button</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </Drawer>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCount: ()=>{dispatch({type:'DECREMENT'})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)