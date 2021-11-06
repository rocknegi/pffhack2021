import React from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';

export default function ParkingPlaces() {
  return (
    <View>
      <MapView
        style={{height: '100%'}}
        initialRegion={{
          latitude: '9.4189612',
          longitude: '7.749908',
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
