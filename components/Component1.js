import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Component1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Edin',
      showName: true,
      message: this.props.message
    }
  }

  static defaultProps = {
    message: 'Hi there'
  }

  render() {
    console.log('HELLO');
    let name = this.state.showName ? this.state.name : 'No name';
    return (
      <View>
        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}
