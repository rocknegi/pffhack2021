import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import {CarpoolingData} from './CarpoolingData';
import {parkingData} from './parkingData';
import carImage from '../assets/images/car.png';
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
              avaialbleParkingSpots || availableChargingSpots
                ? '#a8dab5'
                : 'red'
            }
            key={id}
            title={title}
            // description={`Charging Spots: ${availableChargingSpots}/${totalChargingSpots} Parking Spots: ${avaialbleParkingSpots}/${totalParkingSpots}`}
            coordinate={coords}
            onSelect={e => log('onSelect', e)}
            onPress={e => log('onPress', e)}>
            <Callout>
              <View style={{height: '100%', width: '100%'}}>
                <Text style={styles.markerTitle}>{title}</Text>
                <Text style={styles.markerBody}>
                  Available Charging Spots: {availableChargingSpots} /{' '}
                  {totalChargingSpots} {'\n'}
                  Available Parking Spots: {avaialbleParkingSpots} /{' '}
                  {totalParkingSpots}
                </Text>
              </View>
            </Callout>
          </Marker>
        ),
      )}
      {CarpoolingData.map(({id, time, from, to, availSpace, price, coords}) => (
        <Marker
          // pinColor={
          //   avaialbleParkingSpots || availableChargingSpots
          //     ? '#a8dab5'
          //     : 'red'
          // }
          key={id}
          title={'g'}
          coordinate={coords}
          image={carImage}
          onSelect={e => log('onSelect', e)}
          onPress={e => log('onPress', e)}>
          <Callout>
            <View
              style={{
                display: 'flex',
                flex: 1,
                height: '100%',
                justifyContent: 'center',
              }}>
              <Text style={styles.markerTitle}>
                {from} -- {to}
              </Text>
              <Text style={styles.markerBody}>
                Available Places: {availSpace} {'\n'}
                Price: €{price}/perosn
              </Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
}
const styles = StyleSheet.create({
  markerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  markerBody: {
    textAlign: 'center',
    fontSize: 15,
  },
});
