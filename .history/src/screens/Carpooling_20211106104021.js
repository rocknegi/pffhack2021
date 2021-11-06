import React, {Component, StyleSheet} from 'react';
import {Button, Text, View} from 'react-native';
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
    display: flex,
  },
  addButton: {},
});
