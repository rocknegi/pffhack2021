import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {BottomNavigation} from 'react-native-paper';

const BottomNavigationBar = ({navigation}) => {
  const Home = () => {
    return <Text>🔥🔥🔥</Text>;
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    {key: 'Parkplätze', title: 'Parkplätze', icon: 'map-marker'},
    {key: 'carpooling', title: 'carpooling', icon: 'car'},
    {key: 'C02Footprint', title: 'C02 footprint', icon: 'jsfiddle'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Parkplätze: Home,
    carpooling: Home,
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
