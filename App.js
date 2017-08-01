import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';
import Component6 from './components/Component6';

export default class App extends React.Component {

  renderScene(route, navigator){
      switch(route.id) {
        case 'component5':
          return (<Component5 navigator={navigator} title="component5" />)
        case 'component6':
          return (<Component6 navigator={navigator} title="component6" />)
      }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'component5'}}
        renderScene={this.renderScene}
        configureScreen={(route,routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
        /*<View style={styles.container}>
          <Component5 />
        </View> */
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
