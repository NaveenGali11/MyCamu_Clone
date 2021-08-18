import React from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const Home = (props) => {
  return (
    <View style={styles.homeContainer}>
      <Text>Home Page!!</Text>
      <Button
        title="Go to Profile Page"
        onPress={() => {
          props.navigation.navigate("profile");
        }}
      />
    </View>
  );
};

export const homeScreenOptions = (navData) => {
  return {
    headerTitle: "MyCamu",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "menu" : "menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
