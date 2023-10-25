import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, HStack, Image, NativeBaseProvider } from "native-base";

// Functional Component with props
const Header = (props) => {
  return (
    <HStack
      bg="#AA0002"
      space={3}
      p={3}
      justifyContent="space-between"
      alignItems="center"
    >
      <TouchableOpacity onPress={() => props.drawer.current.openDrawer()}>
        <Image source={require("../assets/menu.png")} alt="menu" size={6} />
      </TouchableOpacity>
      <HStack alignItems="center" space={2}>
        <Image source={require("../assets/facebook.png")} alt="facebook" size={8} />
        <Image source={require("../assets/youtube.png")} alt="youtube" size={8} />
        <Image source={require("../assets/twitter.png")} alt="twitter" size={8} />
        <Image source={require("../assets/search.png")} alt="search" size={8} />
      </HStack>
    </HStack>
  );
};

export default Header;
