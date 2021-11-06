import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import {CarpoolingData} from './CarpoolingData';

export default Carpooling = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Location" style={styles.textInput} />
        <TextInput placeholder="Destination" style={styles.textInput} />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>Search </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {/* <FlatList
                    data={CarpoolingData}
                    renderItem={}
              /> */}
      </View>
    </View>
  );
};
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
    elevation: 3,
  },
  buttonText: {
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: '#fafafa',
    height: 50,
    width: '95%',
    marginTop: 10,
  },
  searchContainer: {
    alignItems: 'center',
    backgroundColor: '#e4e4e4',
    width: '100%',
    minHeight: 200,
    overflow: 'hidden',
    margin: 10,
    borderRadius: 6,
    elevation: 5,
  },
  listContainer: {},
});
