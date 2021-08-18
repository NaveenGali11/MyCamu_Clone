import React from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const Profile = (props) => {
  return (
    <View style={styles.centeredText}>
      <Text>Profile Page!</Text>
      <Button
        title="Go to Home Page"
        onPress={() => {
          props.navigation.navigate("home");
        }}
      />
    </View>
  );
};

export const profileScreenOptions = (navData) => {
  return {
    headerTitle: "Profile Page",
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
  centeredText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
