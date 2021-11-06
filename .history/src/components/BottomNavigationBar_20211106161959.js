import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import Carpooling from '../screens/Carpooling';
import ParkingPlaces from '../screens/ParkingPlaces';

const BottomNavigationBar = () => {
  const [value, setValue] = React.useState('key1');
  const Home = () => {
    return (
      <>
        <Picker
          testID="styled-picker"
          selectedValue={value}
          onValueChange={v => setValue(v)}
          accessibilityLabel="Styled Picker Accessibility Label">
          <Item
            label="Sin"
            value="key0"
            style={{backgroundColor: 'cyan', color: 'red'}}
          />
          <Item
            label="Cos"
            value="key1"
            color="green"
            style={{backgroundColor: 'cyan', fontSize: 36}}
          />
          <Item
            label="Tan"
            value="key2"
            style={{
              backgroundColor: 'blue',
              fontFamily: 'serif',
              color: 'white',
            }}
          />
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
