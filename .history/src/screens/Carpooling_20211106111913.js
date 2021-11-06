import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, TextInput} from 'react-native';

export default class Carpooling extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Location" style={styles.textInput} />
          <TextInput placeholder="Destination" style={styles.textInput} />
          <View style={styles.addButton}>
            <Text style={styles.buttonText}>Place your </Text>
          </View>
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
    height: 35,
    backgroundColor: '#00E676',
    borderRadius: 6,
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: '#fafafa',
    height: 50,
    width: '90%',
    marginTop: 10,
  },
  searchContainer: {
    display: 'flex',
    flex: 0.4,
    alignItems: 'center',
    backgroundColor: '#e4e4e4',
    width: '100%',
    margin: 10,
  },
});
