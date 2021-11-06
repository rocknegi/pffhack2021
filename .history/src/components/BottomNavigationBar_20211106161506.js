import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import Carpooling from '../screens/Carpooling';
import ParkingPlaces from '../screens/ParkingPlaces';
import {Picker} from '@react-native-picker/picker';

const BottomNavigationBar = () => {
  const [value, setValue] = React.useState('key1');
  const Home = () => {
    return (
      <>
        <Picker
          testID="basic-picker"
          selectedValue={value}
          onValueChange={v => setValue(v)}
          accessibilityLabel="Basic Picker Accessibility Label">
          <Item label="hello" value="key0" />
          <Item label="world" value="key1" />
        </Picker>
      </>
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
