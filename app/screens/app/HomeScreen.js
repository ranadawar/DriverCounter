import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import MapView, { Marker, Circle, PROVIDER_GOOGLE } from "react-native-maps";

import { COLORS } from "../../contants/theme";
import useLocation from "../../hooks/useLocation";

import * as Location from "expo-location";

export default function HomeScreen() {
  const location = useLocation();
  const [region, setRegion] = useState({
    latitude: 31.324236,
    longitude: 74.219068,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [userAtLocation, setUserAtLocation] = useState(false);

  useEffect(() => {
    console.log(location);
    if (location) {
      setRegion({
        ...region,
        latitude: location.latitude,
        longitude: location.longitude,
      });
      Alert.alert("Location", "Location Found");
    }
  }, [location]);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        followsUserLocation
        userLocationPriority="high"
        style={{ flex: 1 }}
        region={region}
        zoomEnabled={true}
      >
        <Circle radius={100} strokeColor={COLORS.primary} strokeWidth={5} />
      </MapView>
    </View>
  );
}
