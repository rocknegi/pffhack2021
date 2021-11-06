import React from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';
import {customMapTheme} from './customTheme';
export default function ParkingPlaces() {
  return (
    <View>
      {/* <MapView
        style={{height: '100%'}}
        initialRegion={{
          latitude: 49.4246855,
          longitude: 7.7530764,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          customMapStyle: {customMapTheme},
        }}
      /> */}
      <MapView
        region={this.state.region}
        onRegionChange={this.onRegionChange}
        customMapStyle={mapStyle}
      />
    </View>
  );
}
