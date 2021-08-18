import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home, { homeScreenOptions } from "../screens/Home";
import { Platform } from "react-native";
import Profile, { profileScreenOptions } from "../screens/Profile";
import Colors from "../constants/Colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.iosColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.iosColor,
};

const homeScreenNavigator = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <homeScreenNavigator.Navigator screenOptions={defaultNavOptions}>
      <homeScreenNavigator.Screen
        name="home"
        component={Home}
        options={homeScreenOptions}
      />
      <homeScreenNavigator.Screen
        name="profile"
        component={Profile}
        options={profileScreenOptions}
      />
    </homeScreenNavigator.Navigator>
  );
};

const CamuDrawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <CamuDrawer.Navigator
      screenOptions={{
        drawerStyle: {
          paddingVertical: 40,
        },
      }}
    >
      <CamuDrawer.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <FontAwesome name="user" size={26} color="black" />
          ),
        }}
      />
    </CamuDrawer.Navigator>
  );
};
