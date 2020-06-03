import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Icons = ({ category, vegan }) => {
  let tab = [];

  if (vegan === 1 && category === 0) {
    tab.push(
      <FontAwesome5 name="canadian-maple-leaf" size={16} color="#66B032" />
    );
  }
  if (vegan === 0 && category === 0) {
    tab.push(<Entypo name="leaf" size={16} color="purple" />);
  }
  if (vegan === 0 && category === 1) {
    tab.push(<FontAwesome5 name="warehouse" size={12} color="#ECCC6E" />);
  }
  if (vegan === 1 && category === 2) {
    tab.push(<Entypo name="leaf" size={16} color="#E56257" />);
  }
  if (category > 2) {
    tab.push(<Ionicons name="md-leaf" size={16} color="#4093B1" />);
  }
  // console.log("test2", vegan);
  return tab;
};

export default Icons;
<FontAwesome5 name="warehouse" size={16} color="#ECCC6E" />;
