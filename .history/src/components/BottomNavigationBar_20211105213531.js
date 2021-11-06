import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import {withNavigation} from 'react-navigation';

const BottomNavigationBar = ({navigation}) => {
  const Home = () => {
    return (
      <CommonLayout>
        <Text
        // style={
        //     [themeMode === 'light' ? lightTheme.textHeading : darkTheme.textHeading, { marginHorizontal: '2%' }]
        // }
        >
          Trending 🔥🔥🔥
        </Text>
        <CategoryList onPressItem={_onCatergorySelected} />
      </CommonLayout>
    );
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'videos', title: 'Video', icon: 'video'},
    {key: 'photos', title: 'Photos', icon: 'camera-burst'},
    {key: 'search', title: 'Search', icon: 'magnify'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    videos: Home,
    photos: PhotosScreen,
    search: SearchSchreen,
  });
  const _onCatergorySelected = args => {
    console.log(args);

    navigation.navigate('SelectedCategory', {
      name: args.id,
      heading: args.name,
      folderID: args.folder,
    });
  };

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

export default withNavigation(BottomNavigationBar);
