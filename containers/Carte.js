import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import MapView from "react-native-maps";

export default function Carte() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const askPermission = async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status === "granted") {
        const location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        setIsLoading(false);
      } else {
        alert("Vous devrez accepter la permition");
      }
    };
    askPermission();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
      );
      setData(response.data);
    };
    if (latitude && longitude) {
      fetchData();
    }
  }, [latitude, longitude]);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MapView
        scrollEnabled={true}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        style={{ flex: 1, width: "100%" }}
      >
        {data.map((marker) => {
          return (
            <MapView.Marker
              key={marker.placeId}
              coordinate={{
                latitude: marker.location.lat,
                longitude: marker.location.lng,
              }}
            />
          );
        })}
      </MapView>
    </View>
  );
}
