import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableNativeFeedback, ScrollView } from 'react-native';
import { Tabs, WingBlank, Steps } from 'antd-mobile-rn';

const Step = Steps.Step;

export default class BasicTabsExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [{key: 'a'}, {key: 'b'}],
      refreshing: false,
      loading: false,
      page: 0,
      steps2: [
        {
          title: 'Finished',
          description: 'This is description',
          status: 'finish',
        },
        {
          title: 'In Progress',
          description: 'This is description',
          status: 'process',
        },
        {
          title: 'Waiting',
          description: 'This is description',
          status: 'error',
        },
        {
          title: 'Waiting',
          description: 'This is description',
          status: 'wait',
        },
      ],
    };
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    setTimeout(() => {
      this.setState({refreshing: false});
    },1000);
  }

  render() {
    const tabs = [
      { title: '最新',index: 0 },
      { title: '服务',index: 1 },
      { title: '点菜',index: 2 },
      { title: '买单',index: 3 },
    ];
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
      flex: 1,
    } 
    let renderTab = (x)=> {
      return(
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#64b5f6',true)}
          onPress={()=>{this.setState({
            page: x.index
          })}}
          >
          <View style={{width:'100%',height:'100%',justifyContent:'center'}}>
            <Text style={{textAlign:'center'}}>{x.title}</Text>
          </View>
        </TouchableNativeFeedback>
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>信息</Text>
        <Tabs tabs={tabs} initialPage={0} page={this.state.page} renderTab={renderTab}>
          <FlatList
            data={this.state.data}
            onRefresh = {()=>{}}
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            onEndReachedThreshold='0.01'
            renderItem={() => <View><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text><Text>Content of Second Tab</Text></View>}
            onEndReached={()=>{
              if(this.state.loading){return null}
              else{let data = this.state.data
                this.setState({
                  loading: true,
                  data: [...data,...data]
                })
                setTimeout(()=>{
                  this.setState({
                    loading: false
                  })
                },1000)
              }}
            }
          />
          <View style={style}>
          <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <WingBlank size="lg">
            <Steps>
              {this.state.steps2.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={item.title}
                  description={item.description}
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
      </ScrollView>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        padding: 14,
        backgroundColor: '#1e88e5',
        fontWeight: 'bold',
        color: 'white'
    },
})