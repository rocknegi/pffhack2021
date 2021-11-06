import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CarpoolingData} from './CarpoolingData';

const Carpooling = () => {
  const renderItem = ({item: {id, time, to, from, availSpace, user}}) => (
    <>
      <View style={styles.card}>
        <Text style={{fontSize: 18, fontWeight: '500', margin: 5}}>
          {time}Uhr
        </Text>
        <Text style={{fontSize: 15, margin: 5}}>
          {from}--{to}--
        </Text>
        <Text style={{fontSize: 13, margin: 5}}>
          {availSpace} Available Places
        </Text>
      </View>
      <View style={styles.userCard}>
        <View style={{flex: 0.3, marginLeft: 5}}>
          <Image style={styles.userImage} source={{uri: user.img}} />
        </View>
        <View>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
            {user.name} {user.age}Jahre
          </Text>

          <Text>
            <Icon name="star" />
            {user.rating} * {user.noOfVotes} Votes
          </Text>
        </View>
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
    height: 100,
    backgroundColor: '#e4e4e4',
    marginTop: 10,
  },
  userCard: {
    width: '100%',
    height: 70,
    backgroundColor: '#e4e4e4',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    height: 100,
    width: 100,
    display: 'flex',
    flex: 0.5,
    marginLeft: 10,
    borderRadius: 50,
  },
});
export default Carpooling;
