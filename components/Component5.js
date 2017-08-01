import React from 'react';
import { StyleSheet, Text, View, ListView,TouchableHighlight } from 'react-native';

export default class Component5 extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userdataSource: ds,
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((response) => {
        this.setState({
          userdataSource: this.state.userdataSource.cloneWithRows(response)
        });
    });
  }

  onPress(user) {
    console.log(user);
    this.props.navigator.push({
      id: 'component6'
    })
  }

  renderRow(user, sectionId, rowId, highlightRow) {
    return(
      <TouchableHighlight onPress={() => {this.onPress(user)}}>
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}: {user.email}</Text>
      </View>
    </TouchableHighlight>
    );
  }

  render() {
    return (
      <View>
        <Text>  </Text>
        <Text>  </Text>
        <ListView
          dataSource={this.state.userdataSource}
          renderRow={this.renderRow.bind(this)}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 3
  },
  rowText: {
    flex: 1
  }
});
