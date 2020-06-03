//Je choisi de les aficher en dur car j'ai pas trouvé dans la data une maniere de les rendre dynamique, mais j'afiche l'icon dollar seulement pour ceux que data.price est different de null.
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Foundation } from "@expo/vector-icons";

const Dollars = ({ price }) => {
  return price ? (
    <View style={{ flexDirection: "row" }}>
      <Foundation name="dollar" size={16} color="#EEA952" />
      <Foundation name="dollar" size={16} color="#EEA952" />
      <Foundation name="dollar" size={16} color="#BBBBBB" />
    </View>
  ) : null;
};

export default Dollars;
