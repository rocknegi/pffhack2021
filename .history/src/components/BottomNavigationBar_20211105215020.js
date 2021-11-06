import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {BottomNavigation} from 'react-native-paper';

const BottomNavigationBar = ({navigation}) => {
  const Home = () => {
    return <Text>Trending 🔥🔥🔥</Text>;
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    {key: 'videos', title: 'Video', icon: 'map-marker'},
    {key: 'photos', title: 'Photos', icon: 'car'},
    {key: 'search', title: 'Search', icon: 'air'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    videos: Home,
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
      // activeColor={themeMode === 'light' ? '#000' : darkTheme.icon.color}
      // barStyle={{ backgroundColor: themeMode === 'light' ? lightTheme.color.color : '#000' }}
    />
  );
};

export default BottomNavigationBar;
