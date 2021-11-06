import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {BottomNavigation} from 'react-native-paper';

const BottomNavigationBar = ({navigation}) => {
  const Home = () => {
    return <Text>Trending 🔥🔥🔥</Text>;
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    {key: 'Parkplatz', title: 'Parkplatz', icon: 'map-marker'},
    {key: 'photos', title: 'Photos', icon: 'car'},
    {key: 'search', title: 'Search', icon: 'jsfiddle'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Parkplatz: Home,
    photos: Home,
    search: Home,
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
