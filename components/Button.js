import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text, NativeBaseProvider } from "native-base";

// Functional Component with props
const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <Box
        bg="#dddddd"
        p={3}
        alignItems="center"
        borderRadius={30}
      >
        <Text fontSize={12} textTransform="uppercase" fontWeight="bold">
          {props.text}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Button;
