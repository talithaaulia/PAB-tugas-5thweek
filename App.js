import React, { useState } from "react";
import { StatusBar } from "react-native";
import {
  NativeBaseProvider,
  Drawer,
  Box,
  Button,
  HStack,
} from "native-base";
import { Header, Separator } from "./components";
import { Article, List, NativeBaseBasic, GlueStackUIBasic } from "./screens";

// Array of pages
const pageArr = [
  { name: "List", comp: <List /> },
  { name: "Article", comp: <Article /> },
  { name: "NativeBaseBasic", comp: <NativeBaseBasic /> },
  { name: "Gluestack UI Basic", comp: <GlueStackUIBasic /> },
];

const App = () => {
  // State Declaration
  const [page, setPage] = useState("List");

  // Arrow Function inside Functional Component
  const changePage = (pageName, onClose) => {
    onClose(); // Close Drawer
    setPage(pageName); // Change state value
  };

  return (
    <NativeBaseProvider>
      <Drawer
        placement="left"
        size={300}
        isOpen={false}
        onClose={() => {}}
        content={
          <Box p={4} bg="#222222" flex={1}>
            {pageArr.map((item) => (
              <HStack key={item.name}>
                <Button
                  text={item.name}
                  colorScheme="blue"
                  onPress={() => changePage(item.name)}
                />
              </HStack>
            ))}
            <Separator height={30} />
            <Button
              text="Close"
              colorScheme="red"
              onPress={() => {}}
            />
          </Box>
        }
      >
        <StatusBar barStyle="light-content" backgroundColor="#AA0002" />
        <Header />
        {page === "List" ? <List /> : page === "Article" ? <Article /> : null}
      </Drawer>
    </NativeBaseProvider>
  );
};

export default App;
