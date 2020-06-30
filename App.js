import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import RestaurantScreen from "./containers/RestaurantScreen";
import SettingsScreen from "./containers/SettingScreen";
import VeganScreen from "./containers/VeganScreen";
import VegetarienScreen from "./containers/VegetarienScreen";
import OptionsScreen from "./containers/OptionsScreen";
import SignInScreen from "./containers/SignInScreen";
import SignUpScreen from "./containers/SignUpScreen";
import FavoriteScreen from "./containers/FavoriteScreen";
import Restaurant from "./containers/Restaurant";
import Carte from "./containers/Carte";
// import RechercheScreen from "./containers/RechercheScreen";

//

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
//---------------------------------------------------------

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);
  //-------------------Token---------------------------------
  const setToken = async (token) => {
    if (token) {
      AsyncStorage.setItem("userToken", token);
    } else {
      AsyncStorage.removeItem("userToken");
    }
    setUserToken(token);
  };
  const setId = async (id) => {
    if (id) {
      AsyncStorage.setItem("userId", id);
    } else {
      AsyncStorage.removeItem("userId");
    }
    setUserId(id);
  };

  useEffect(() => {
    const bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem("userToken");

      setUserToken(userToken);
      setIsLoading(false);
    };
    bootstrapAsync();
  }, []);

  //-----------------------------------------
  return (
    <NavigationContainer>
      {isLoading ? null : userToken === null ? (
        //----------Login-----Signup------
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            options={{
              header: () => null,
              animationEnabled: false,
            }}
          >
            {(props) => <SignInScreen setId={setId} setToken={setToken} />}
          </Stack.Screen>
          <Stack.Screen
            name="SignUp"
            options={{
              title: "Inscription",
              headerStyle: { backgroundColor: "#7C4EC4" },
              headerTitleAlign: "center",
              headerTitleStyle: { color: "white" },
            }}
          >
            {() => <SignUpScreen setId={setId} setToken={setToken} />}
          </Stack.Screen>
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen //-------------Tab-----------------
            name="Tab"
            options={{
              header: () => null,
              animationEnabled: false,
            }}
          >
            {() => (
              <Tab.Navigator
                tabBarOptions={{
                  style: { backgroundColor: "#EAEAEA" },
                  activeTintColor: "green",
                  inactiveTintColor: "gray",
                }}
              >
                <Tab.Screen
                  name="Home"
                  options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons
                        name="cow"
                        size={24}
                        color="#7C4EC4"
                      />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="RestaurantScreen"
                        options={{
                          title: "HappyCow",
                          tabBarLabel: "RestaurantScreen",
                          headerStyle: { backgroundColor: "#7C4EC4" },
                          headerTitleStyle: { color: "white" },
                          headerTitleAlign: "center",
                        }}
                      >
                        {() => <RestaurantScreen />}
                      </Stack.Screen>
                      <Stack.Screen
                        name="Restaurant"
                        options={{
                          title: "HappyCow",
                          headerStyle: { backgroundColor: "#7C4EC4" },
                          headerTitleStyle: {
                            color: "white",
                            marginRight: 55,
                            textAlign: "center",
                          },
                        }}
                      >
                        {(props) => <Restaurant {...props} />}
                      </Stack.Screen>
                      <Stack.Screen
                        name="VeganScreen"
                        options={{
                          title: "Vegan",
                          headerStyle: { backgroundColor: "#6CAC4E" },
                          headerTitleStyle: {
                            color: "white",
                            marginRight: 55,
                            textAlign: "center",
                          },
                        }}
                      >
                        {(props) => <VeganScreen {...props} />}
                      </Stack.Screen>
                      <Stack.Screen
                        name="VegetarienScreen"
                        options={{
                          title: "Végétarien",
                          headerStyle: { backgroundColor: "#A51EF7" },
                          headerTitleStyle: {
                            color: "white",
                            marginRight: 55,
                            textAlign: "center",
                          },
                        }}
                      >
                        {(props) => <VegetarienScreen {...props} />}
                      </Stack.Screen>
                      <Stack.Screen
                        name="OptionsScreen"
                        options={{
                          title: "Options végétarien",
                          headerStyle: { backgroundColor: "#F69800" },
                          headerTitleStyle: {
                            color: "white",
                            marginRight: 55,
                            textAlign: "center",
                          },
                        }}
                      >
                        {(props) => <OptionsScreen {...props} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                <Tab.Screen
                  name="Carte"
                  options={{
                    tabBarLabel: "Carte",
                    tabBarIcon: ({ color, size }) => (
                      <Feather name="map" size={24} color="#7C4EC4" />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Carte"
                        options={{
                          title: "Carte",
                          headerStyle: { backgroundColor: "#7C4EC4" },
                          headerTitleStyle: { color: "white" },
                          headerTitleAlign: "center",
                        }}
                      >
                        {(props) => <Carte {...props} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                <Tab.Screen
                  name="Favorite"
                  options={{
                    tabBarLabel: "Favorite",
                    tabBarIcon: ({ color, size }) => (
                      <MaterialIcons
                        name="favorite"
                        size={24}
                        color="#7C4EC4"
                      />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Favorite"
                        options={{
                          title: "Favorite",
                          tabBarLabel: "Favorite",
                          headerStyle: { backgroundColor: "#7C4EC4" },
                          headerTitleStyle: { color: "white" },
                          headerTitleAlign: "center",
                        }}
                      >
                        {(props) => <FavoriteScreen {...props} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="Réglages"
                  options={{
                    tabBarLabel: "Réglages",
                    tabBarIcon: ({ color, size }) => (
                      <MaterialIcons
                        name="settings-power"
                        size={24}
                        color="#7C4EC4"
                      />
                    ),
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Settings"
                        options={{
                          title: "Réglages",
                          tabBarLabel: "Settings",
                          headerStyle: { backgroundColor: "#7C4EC4" },
                          headerTitleStyle: { color: "white" },
                          headerTitleAlign: "center",
                        }}
                      >
                        {() => <SettingsScreen setToken={setToken} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
