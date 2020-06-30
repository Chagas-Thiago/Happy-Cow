//Les bouttom pour filtres les types de restaurant/magasin vegan

import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const Header = ({ data }) => {
  console.log(data);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("VeganScreen")}>
        <View style={styles.view}>
          <View style={{ margin: 8, alignItems: "center" }}>
            <FontAwesome5
              name="canadian-maple-leaf"
              size={18}
              color="#66B032"
            />
            <Text style={styles.txt}>Vegan</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("VegetarienScreen")}>
        <View style={styles.view}>
          <View style={{ margin: 8, alignItems: "center" }}>
            <Entypo name="leaf" size={18} color="purple" />
            <Text style={styles.txt}>Végétarien</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("OptionsScreen")}>
        <View style={styles.view}>
          <View style={{ margin: 8, alignItems: "center" }}>
            <Entypo name="leaf" size={18} color="#E56257" />
            <Text style={styles.txt}>Options vég...</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.view}>
        <View style={{ margin: 8, alignItems: "center" }}>
          <AntDesign name="filter" size={18} color="black" />
          <Text style={styles.txt}>Filters</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flexDirection: "row",
    borderBottomColor: "#DBDBDB",
    borderBottomWidth: 2,
  },
  view: {
    backgroundColor: "#F6F6F6",
    margin: 2,
    height: 60,
    width: 89,
    borderWidth: 2,
    borderColor: "#DBDBDB",
    borderRadius: 10,
    marginTop: 6,
    marginBottom: 5,
  },
  txt: {
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default Header;
