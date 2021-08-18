import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Entypo } from "@expo/vector-icons";
import { Platform } from "react-native";
import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Entypo}
      iconSize={25}
      color={Platform.OS === "android" ? "white" : Colors.iosColor}
    />
  );
};

export default CustomHeaderButton;
