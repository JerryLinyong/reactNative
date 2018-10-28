import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Tabs } from 'antd-mobile-rn';

const renderContent = (tab: any, index: any) => {
  function getColor(){ var colorElements = "1,2,3,4,5,6,7,8,9,a,b,c,d,e"; var colorArray = colorElements.split(","); var color ="#"; for(var i =0;i<6;i++){ color+=colorArray[Math.floor(Math.random()*14)]; } return color;}
  const content = [1, 2, 3, 4, 5, 6, 7, 8].map(i => {
    let randomColor = getColor()
    return (
      <View key={`${index}_${i}`} style={{margin: 6,backgroundColor: randomColor,padding: 10,borderRadius: 10}}>
        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',padding: 4}}>
            <Text style={{fontSize: 26,fontWeight: 'bold', color: 'white'}}>{'牡丹包厢'}</Text>
            <Text style={{color: 'yellow'}}>{'45'}</Text>
        </View>
        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',padding: 4}}>
            <Text style={{color: 'white'}}>{'2分钟前'}</Text>
            <Text style={{color: 'white'}}>{'点菜'}</Text>
        </View>
      </View>
    );
  });
  return <ScrollView style={{ backgroundColor: '#fff' }}>{content}</ScrollView>;
};
export default class BasicTabsExample extends React.Component {
  render() {
    const tabs1 = [
      { title: '全部' },
      { title: '一楼大厅' },
      { title: '二楼大厅' },
    ];
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Tabs tabs={tabs1} initialPage={0} tabBarPosition="top">
            {renderContent}
          </Tabs>
        </View>
      </View>
    );
  }
}
export const title = 'Tabs';
export const description = 'Tabs example';
