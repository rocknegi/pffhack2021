import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {parkingData} from './parkingData';

export default function ParkingPlaces() {
  const {width, height} = Dimensions.get('window');

  const ASPECT_RATIO = width / height;
  const LATITUDE = 49.4241319;
  const LONGITUDE = 7.7519126;
  const LATITUDE_DELTA = 0.004;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const region = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
  const log = (eventName, e) => {
    console.log(eventName, e.nativeEvent);
  };

  return (
    <MapView style={{height: '100%'}} initialRegion={region}>
      {parkingData.map(item => (
        <Marker
          coordinate={item.coords}
          onSelect={e => log('onSelect', e)}
          onDrag={e => log('onDrag', e)}
          onDragStart={e => log('onDragStart', e)}
          onDragEnd={e => log('onDragEnd', e)}
          onPress={e => log('onPress', e)}
          draggable
        />
      ))}
    </MapView>
  );
}
