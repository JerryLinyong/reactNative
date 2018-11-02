import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Icon, WingBlank, Steps } from 'antd-mobile-rn';
const Step = Steps.Step;

export default class BasicTimelineExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      steps1: [
        { title: 'Finished', description: 'This is description' },
        { title: 'In Progress', description: 'This is description' },
        { title: 'Waiting', description: 'This is description' },
      ],
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
  render() {
    return (
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
    );
  }
}