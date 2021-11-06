import React from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';
import {customMapTheme} from './customTheme';
export default function ParkingPlaces() {
  const region = {
    region: {
      latitude: 49.4246855,
      longitude: 7.7530764,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };
  return (
    <View>
      <MapView region={region} customMapStyle={customMapTheme} />
    </View>
  );
}
