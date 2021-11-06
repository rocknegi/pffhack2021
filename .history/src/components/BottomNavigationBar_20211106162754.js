import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import Carpooling from '../screens/Carpooling';
import ParkingPlaces from '../screens/ParkingPlaces';

const BottomNavigationBar = () => {
  const [value, setValue] = React.useState('key1');
  const Home = () => {
    return (
      <View style={{margin: 10, display: 'flex', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Means Of transport
        </Text>
        <Picker
          testID="styled-picker"
          selectedValue={value}
          onValueChange={v => setValue(v)}
          accessibilityLabel="Styled Picker Accessibility Label">
          <Picker.Item label="Electrical vehicle" value="key0" />
          <Picker.Item label="Plug-in-Hybrid" value="key1" />
          <Picker.Item label="Petrol Engine" value="key2" />
        </Picker>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Enter Distance</Text>
        <TextInput
          placeholder="Kilometers"
          style={{backgroundColor: '#e4e4e4', paddingLeft: '5%'}}
        />
        <TouchableOpacity
          style={{
            width: '30%',
            height: 35,
            backgroundColor: '#00E676',
            borderRadius: 6,
            justifyContent: 'center',
            marginTop: 20,
            elevation: 3,
          }}>
          <Text>Calculate</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    {key: 'Parkplätze', title: 'Parkplätze', icon: 'map-marker'},
    {key: 'carpooling', title: 'carpooling', icon: 'car'},
    {key: 'C02Footprint', title: 'C02 footprint', icon: 'jsfiddle'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Parkplätze: ParkingPlaces,
    carpooling: Carpooling,
    C02Footprint: Home,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
      inactiveColor="#9e9e9e"
      activeColor="#000"
      barStyle={{backgroundColor: '#e4e4e4'}}
    />
  );
};

export default BottomNavigationBar;
