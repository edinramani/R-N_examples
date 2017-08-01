import React from 'react';
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native';

export default class Component3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: 'Hello'
    }
  }

  onChangeText(value) {
    this.setState({
      textValue:value
    })
  }

  onSubmit() {
    console.log('Input Submitted...')
  }

  onSwitchChange(value) {
    this.setState({
      switchValue:value
    })
  }

  render() {
    return (
      <View>
        <Text>  </Text>
        <Text>  </Text>
        <TextInput
          placeholder= "Enter Text"
          value={this.state.textValue}
          onChangeText={(value) => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
        />
        <Text>{this.state.textValue}</Text>
        <Switch
          value={this.state.switchValue}
          onValueChange={(value) => this.onSwitchChange(value)}
        />
      </View>
    );
  }
}
