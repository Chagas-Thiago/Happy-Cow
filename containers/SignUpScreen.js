//Page d'inscription

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//-----------------------------------------------------------------------

export default function SingUpScreen({ setToken }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //---------------------------------------------------------------------
  //Declarar route post que sera chamado la embaixo no botao s'inscrire com onPress

  const handleSubmit = async () => {
    try {
      if (password !== confirmPassword) {
        alert("Les mots de passe ne sont pas identiques");
      } else {
        const response = await axios.post(
          "https://express-airbnb-api.herokuapp.com/user/sign_up",
          { email, name, username, description, password }
        );
        console.log(response.data);

        if (response.data.token) {
          setToken(response.data.token);
          setId(response.data.id);
        }
      }
    } catch (error) {
      alert("Sucess,felicitation");
    }
  };

  //--------------------------------------------------------------------
  //contentContainerStyle pra quando tiver que aplicar style pra pagina toda

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.view}>
          <Text style={styles.title}>Rejoignez-nous !</Text>
          <TextInput
            style={styles.textInput}
            placeholder="email"
            placeholderTextColor="#8C5FC9"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.textInput}
            placeholder="username"
            placeholderTextColor="#8C5FC9"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            style={styles.textInput}
            placeholder="name"
            placeholderTextColor="#8C5FC9"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <TextInput
            multiline={true}
            numberOfLines={8}
            maxLength={200}
            style={styles.textArea}
            placeholder="description (max. 200 characters"
            placeholderTextColor="#8C5FC9"
            onChangeText={(text) => setDescription(text)}
            value={description}
          />
          <TextInput
            style={styles.textInput}
            placeholder="password"
            placeholderTextColor="#8C5FC9"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TextInput
            style={styles.textInput}
            placeholder="confirm password"
            placeholderTextColor="#8C5FC9"
            secureTextEntry={true}
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
          />

          {/* Declarar e estilizar os butoes ------------------------*/}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}> S'inscrire</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <Text style={styles.underButton}>
              Déjà un compte ? Se connecter
            </Text>
            {/* -------------------------------------------------------- */}
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
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
  view: {
    padding: 25,
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#8C5FC9",
    marginVertical: 20,
  },
  button: {
    width: 190,
    height: 65,
    borderRadius: 10,
    backgroundColor: "#8C5FC9",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
  underButton: {
    marginTop: 15,
    color: "#8C5FC9",
    textDecorationLine: "underline",
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
  textArea: {
    width: 330,
    height: 80,
    borderColor: "#8C5FC9",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
    textAlignVertical: "top",
    color: "#8C5FC9",
    marginBottom: 20,
  },
});
