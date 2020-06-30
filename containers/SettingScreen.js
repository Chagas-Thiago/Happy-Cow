//Screen pour deconnecter

import React from "react";
import { Button, View, Image, Text } from "react-native";

export default function SettingScreen({ setToken }) {
  return (
    <View style={{ alignItems: "center", marginTop: 200 }}>
      <Image
        resizeMode="contain"
        source={require("../assets/construction.png")}
      />
      <Button
        title="Deconnecter"
        onPress={() => {
          setToken(null);
        }}
      />
      <Text style={{ fontStyle: "italic", marginTop: 80 }}>
        Made with React at Le Reacteur by Thiago
      </Text>
    </View>
  );
}
