//Page de connexion

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
//---------------------------chamar os props setToken e navigation------------------------------------------

export default function SignInScreen({ setToken, setId }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  //-----------------------Chamar a route post---------------------------

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://express-airbnb-api.herokuapp.com/user/log_in",
        { email: email, password: password }
      );
      console.log(response.data);
      if (response.data.token) {
        setToken(response.data.token);
        setId(response.data.id);
      } else {
        alert("Inserer votre email et mot de passe pour si connecter");
      }
    } catch (error) {
      alert("Email ou mot de passe inconnu");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.vacaloka}
        resizeMode="contain"
        source={require("../assets/vacaloka.png")}
      />
      <View>
        <TextInput
          autoCapitalize="none"
          style={[styles.textInput, { marginTop: 70 }]}
          placeholderTextColor="#8C5FC9"
          placeholder="email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          placeholder="mot de passe"
          placeholderTextColor="#8C5FC9"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <View style={styles.allButtons}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.underButton}>Pas de compte? S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
  button: {
    width: 190,
    height: 65,
    borderRadius: 10,
    backgroundColor: "#8C5FC9",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  textInput: {
    borderBottomColor: "#8C5FC9",
    borderBottomWidth: 1,
    width: 330,
    height: 45,
    marginBottom: 30,
    paddingLeft: 15,
    color: "white",
  },
  underButton: {
    marginTop: 35,
    color: "#8C5FC9",
    textDecorationLine: "underline",
  },
  allButtons: {
    alignItems: "center",
  },
  img: {
    height: 200,
    width: 200,
  },
  vacaloka: {
    height: 300,
  },
});
