import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default function ParkingPlaces() {
  const {width, height} = Dimensions.get('window');
  const [markerCoords, setMarkerCoords] = useState({
    latitude: 49.4226582,
    longitude: 7.7523738,
  });
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

  return (
    <View>
      <MapView style={{height: '100%'}} initialRegion={region}>
        <Marker
          title="Parking Place"
          draggable={true}
          coordinate={markerCoords}
          onDragEnd={e =>
            setMarkerCoords({x: e.nativeEvent.coordinate})
          }></Marker>
      </MapView>
    </View>
  );
}
