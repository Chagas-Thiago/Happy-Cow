import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stars = ({ rating }) => {
  const renderStars = () => {
    let tab = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        tab.push(
          <Ionicons
            key={i}
            name="ios-star"
            size={16}
            color="#F5B000"
            // style={{ marginRight: 1 }}
          />
        );
      } else {
        tab.push(
          <Ionicons key={i} name="ios-star" size={16} color="#BBBBBB" />
        );
      }
    }
    return tab;
  };
  return <View style={styles.stars}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  stars: {
    flexDirection: "row",
  },
});

export default Stars;
