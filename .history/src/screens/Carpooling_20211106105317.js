import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

export default class Carpooling extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.addButton}>
          <Text>Add +</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  addButton: {
    width: '100%',
    marginHorizontal: 10,
    backgroundColor: '#00E676',
  },
});
