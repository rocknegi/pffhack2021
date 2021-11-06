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
      {parkingData.map(
        ({
          id,
          title,
          totalChargingSpots,
          availableChargingSpots,
          totalParkingSpots,
          avaialbleParkingSpots,
          coords,
        }) => (
          <Marker
            pinColor={
              avaialbleParkingSpots > 0 && availableChargingSpots > 0
                ? 'green'
                : 'red'
            }
            key={id}
            title={title}
            description={`Charging Spots: ${availableChargingSpots}/${totalChargingSpots} Parking Spots: ${avaialbleParkingSpots}/${totalParkingSpots}`}
            coordinate={coords}
            onSelect={e => log('onSelect', e)}
            onPress={e => log('onPress', e)}
          />
        ),
      )}
    </MapView>
  );
}
