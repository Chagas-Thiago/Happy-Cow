import React from "react";
import { Button, Text, View, Image } from "react-native";

export default function SettingScreen({ setToken }) {
  return (
    <View style={{ alignItems: "center", marginTop: 200 }}>
      <Image
        // style={styles.img}
        resizeMode="contain"
        source={require("../assets/construction.png")}
      />
      <Button
        title="Deconnecter"
        onPress={() => {
          setToken(null);
        }}
      />
    </View>
  );
}
