import React, { useSate, useEffect, useState, Image } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import axios from "axios";
import Cards from "./components/Cards";
import Stars from "./components/Stars";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export default function RestaurantScreen() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const searchFilter = (text) => {
    const newData = data.filter((item) => {
      // console.log("test", item);
      const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setData(newData);
    setText(text);
  };
  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text) => searchFilter(text)}
        value={data}
        underlineColorAndroid="transparent"
        placeholder="Recherche ici"
      />

      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("Restaurant", {
                name: item.name,
                id: item.placeId,
                description: item.description,
                pictures: item.pictures,
                location: item.location,
                rating: item.rating,
                address: item.address,
                phone: item.phone,
                website: item.website,
              })
            }
          >
            <Cards data={item} />
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
  },
});
