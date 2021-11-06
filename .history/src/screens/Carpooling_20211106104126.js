import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {flex} from 'styled-system';

export default class Carpooling extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.addButton}> Add + </Button>
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
