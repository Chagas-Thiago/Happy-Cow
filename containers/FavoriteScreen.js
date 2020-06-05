//Plus tard rendre la page dynamique avec des bottom pour appelle,
//direction vers siteweb et google maps pour address.
import React, { useEffect, useState } from "react";
import {
  View,
  AsyncStorage,
  Image,
  StyleSheet,
  ActivityIndicator,
  Text,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function FavoriteScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    const bootstrapAsync = async () => {
      const stored = await AsyncStorage.getItem("favorite");

      const value = JSON.parse(stored);

      setFavorite(value);
      setIsLoading(false);
      console.log("value:", value);
    };

    bootstrapAsync();
  }, []);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <ScrollView style={styles.container}>
      <View
        style={{
          borderBottomColor: "gray",
          borderBottomWidth: 1,
          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.img}
            source={{ uri: favorite.route.params.pictures[1] }}
          />
          <Image
            style={styles.img}
            source={{ uri: favorite.route.params.pictures[0] }}
          />
          <Image
            style={styles.img}
            source={{ uri: favorite.route.params.pictures[2] }}
          />
        </View>
        <View>
          <Text style={styles.name}>{favorite.route.params.name}</Text>
          <View style={styles.donnes}>
            <Entypo name="address" size={20} color="black" />
            <Text>= {favorite.route.params.address}</Text>
          </View>
          <View style={styles.donnes}>
            <MaterialCommunityIcons name="web" size={20} color="black" />
            <Text>= {favorite.route.params.website}</Text>
          </View>
          <View style={styles.donnes}>
            <Entypo name="phone" size={20} color="black" />
            <Text>= {favorite.route.params.phone}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 6,
    flexDirection: "row",
  },
  img: {
    height: 120,
    width: 144,
  },
  name: {
    margin: 5,
    fontSize: 18,
    textShadowRadius: 5,
  },
  donnes: {
    flexDirection: "row",
    fontSize: 14,
    margin: 4,
  },
});
