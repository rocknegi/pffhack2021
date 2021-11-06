import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {flex} from 'styled-system';

export default class Carpooling extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.addButton}> Add + </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'coloumn',
  },
  addButton: {
    backgroundColor: '#e4e4e4',
  },
});
