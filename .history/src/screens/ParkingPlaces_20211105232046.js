import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import {customMapTheme} from './customTheme';
export default function ParkingPlaces() {
  const {width, height} = Dimensions.get('window');

  const ASPECT_RATIO = width / height;
  const LATITUDE = 49.4246855;
  const LONGITUDE = 7.7530764;
  const LATITUDE_DELTA = 0.005;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const region = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
  return (
    <View>
      <MapView
        style={{height: '100%'}}
        initialRegion={region}
        customMapStyle={customMapTheme}
      />
    </View>
  );
}
