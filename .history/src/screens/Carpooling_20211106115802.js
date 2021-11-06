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

const Carpooling = () => {
  const renderItem = ({item: {id, time, to, from, availSpace, user}}) => (
    <>
      <View style={styles.card}>
        <Text style={{fontSize: 18, fontWeight: '500'}}>{time}Uhr</Text>
        <Text style={{fontSize: 15}}>
          {from}--{to}--
        </Text>
        <Text style={{fontSize: 13}}>{availSpace} Availavle Places</Text>
      </View>
      <View>
        <Text>{user.name}</Text>
        <Text>{user.age}Jahre</Text>
        <Text>{user.rating}</Text>
        <Text>{user.noOfVotes} Votes</Text>
      </View>
    </>
  );
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
        <FlatList
          data={CarpoolingData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
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
  listContainer: {
    width: '95%',
    display: 'flex',
    // alignItems: 'center',
  },
  card: {
    width: '100%',
    height: 80,
    backgroundColor: '#e4e4e4',
  },
});
export default Carpooling;