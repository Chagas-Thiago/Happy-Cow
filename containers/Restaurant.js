import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import FavoriteScreen from "./FavoriteScreen";
import { ScrollView } from "react-native-gesture-handler";
import MapView from "react-native-maps";
import { AsyncStorage } from "react-native";
import Stars from "../components/Stars";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Dollars from "../components/Dollars";

const Restaurant = ({ route }) => {
  const [favorite, setFavorite] = useState(null);
  // console.log("Route ===>", route);
  _renderItem = ({ item, index }) => {
    return <Image style={styles.img} source={{ uri: item }} />;
  };

  return (
    // -------------button Favorit-------------------------
    <View style={styles.containeurRestau}>
      {/* //------------premiere partie 100%------------------------------// */}
      <ScrollView>
        <View style={styles.partie1}>
          <Carousel
            ref={(c) => {
              _carousel = c;
            }}
            data={route.params.pictures}
            renderItem={_renderItem}
            sliderWidth={414}
            itemWidth={310}
            loop={true}
          />

          <View>
            <View
              style={{
                marginRight: 20,
                marginLeft: 20,
              }}
            >
              <Text style={styles.name}>{route.params.name}</Text>

              <View style={styles.watch}>
                <View>
                  <Stars rating={route.params.rating} />
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons name="md-stopwatch" size={16} color="white" />
                    <Text
                      style={{ color: "white", marginLeft: 5, fontSize: 12 }}
                    >
                      OUVERT
                    </Text>
                  </View>
                </View>

                <View style={{ alignItems: "flex-end" }}>
                  <Dollars price={route} />
                  <TouchableOpacity
                    style={styles.favorit}
                    onPress={async () => {
                      const value = JSON.stringify({
                        route,
                      });
                      console.log(value);
                      await AsyncStorage.setItem("favorite", value);
                      setFavorite(value);
                    }}
                  >
                    <Text style={{ color: "white" }}>Ajouter favoris </Text>
                    <Entypo name="heart" size={22} color="grey" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* --------------Deuxieme partie 50%--------------------------- */}
        {/* Tout est en dur sur cette deuxieme partie, la rendre dynamique plus tard */}
        <View style={styles.partie2}>
          <View style={{ alignItems: "center" }}>
            <EvilIcons name="pencil" size={24} color="grey" />
            <Text style={styles.txt}>AJOUTER UN AVIS</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <MaterialIcons name="add-a-photo" size={24} color="grey" />
            <Text style={styles.txt}>AJOUTER UNE</Text>
            <Text style={styles.txt}>PHOTO</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Entypo name="phone" size={24} color="grey" />
            <Text style={styles.txt}>APPELER</Text>
          </View>
        </View>

        {/* ---------------------Trexieme partie 100%------------------------- */}
        <View style={styles.partie3}>
          <Text style={styles.description}>{route.params.description}</Text>
        </View>
        <View>
          <MapView
            scrollEnabled={true}
            style={{
              flex: 1,
              height: 200,
            }}
            initialRegion={{
              latitude: route.params.location.lat,
              longitude: route.params.location.lng,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: route.params.location.lat,
                longitude: route.params.location.lng,
              }}
            />
          </MapView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // containeurRestau: {
  //   margin: 20,
  //   flex: 1,
  // },
  img: {
    height: 180,
  },
  watch: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txt: {
    marginRight: 20,
    marginLeft: 20,
    color: "#4D4D4D",
    fontSize: 12,
  },
  partie2: {
    flex: 1,

    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  description: {
    color: "#4D4D4D",
    fontSize: 14,
    lineHeight: 20,
  },
  partie1: {
    backgroundColor: "#7C4EC4",

    width: "100%",
  },
  partie3: {
    margin: 20,
  },
  favorit: {
    backgroundColor: "#7C4EC4",
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  name: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    borderColor: "#DBDBDB",
    marginTop: 5,
    textAlign: "center",
    color: "#F0F0F0",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 4,
  },
});

export default Restaurant;
