import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';

export default class App extends React.Component {
  render() {
    return (
      <View /*style={styles.container}*/>
        <Component5 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00e5ee', // probaj 'skyblue' ilji steelblue boja
    alignItems: 'center',
    justifyContent: 'center',
  },
});
