import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

export default class Carpooling extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.addButton}>
          <Text style={styles.buttonText}>Add +</Text>
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
    margin: 10,
  },
  addButton: {
    width: '50%',
    height: 30,
    backgroundColor: '#00E676',
    borderRadius: 6,
  },
  buttonText: {
    textAlign: 'center',
    margin: 0,
  },
});
