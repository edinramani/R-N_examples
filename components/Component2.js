import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class Component2 extends React.Component {

  onPress(){
    console.log('Area Pressed');
  }

  onPress2(){
    console.log('Area 2 Pressed');
  }

  render() {
    return (
      <View>
        <View style={styles.myView}>
          <Text style={styles.myText}>Component 2</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.v1}
            onPress={this.onPress}
            underlayColor= 'white'
            >
            <View>
              <Text style={styles.vText}>View 1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity
             style={styles.v2}
             onPress={this.onPress2}
            >
            <View>
              <Text style={styles.vText}>View 2</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.v3}>
            <Text style={styles.vText}>View 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'blue'
  },
  myText: {
    color: 'white'
  },
  container: {
    flexDirection: 'row',
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10
  },
  vText: {
    color: 'white'
  }
});
