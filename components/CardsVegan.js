//Cards pour etre recuperer aux screen a CardVegan
import React, { useState } from "react";
import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Stars from "./Stars";
import Icons from "./Icons";
import Dollars from "./Dollars";

const CardsVegan = ({ data }) => {
  const [viewMore, setViewMore] = useState(false);

  //J'afiche seulement ceux q'uon description
  return data.vegan === 1 && data.category === 0 ? (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: data.thumbnail }} />
      <View style={styles.container}>
        <View>
          <View>
            <Text style={styles.name}>{data.name}</Text>

            <Stars rating={data.rating} />
            <View style={styles.watch}>
              <Ionicons name="md-stopwatch" size={18} color="#66B032" />
              <Text style={{ color: "#66B032", marginLeft: 5 }}>OUVERT</Text>
            </View>

            <Text
              numberOfLines={viewMore ? null : 2}
              style={styles.description}
            >
              {data.description}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Icons vegan={data.vegan} category={data.category} />
        <Dollars price={data.price} />
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  img: {
    height: 90,
    width: 90,
    borderRadius: 2,
  },
  name: {
    fontSize: 15,
  },
  container: {
    alignItems: "center",
    flex: 1,
    margin: 6,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  watch: {
    flexDirection: "row",
  },
  description: {
    fontSize: 12,
  },
});
export default CardsVegan;
