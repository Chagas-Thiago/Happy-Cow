//Le screen VeganScreen qui reçois ça condittion du componants CardsScreen

import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, StyleSheet } from "react-native";
import CardsVegan from "../components/CardsVegan";
import axios from "axios";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export default function VeganScreen() {
  const [data, setData] = useState([]);
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

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.placeId)}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("Restaurant", {
                price: item.price,
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
            <CardsVegan data={item} />
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E7F0C3",
    margin: 2,
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
    borderWidth: 2,
    paddingLeft: 12,
    marginTop: 0,
    borderColor: "#DBDBDB",
    fontWeight: "bold",
    backgroundColor: "#F6F6F6",
  },
});
