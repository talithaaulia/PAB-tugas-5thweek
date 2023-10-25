import React, { useState } from "react";
import {
  FlatList,
  Modal,
} from "react-native";
import {
  Box,
  Button,
  Text,
  Image,
  NativeBaseProvider,
} from "native-base";

// Dummy Data (Array of Object)
const datas = [
  // Your data here...
];

const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <Box p={3} borderBottomWidth={1} borderColor="gray.200">
        <Image
          source={{ uri: item.image }}
          alt={item.title}
          size="xl"
          resizeMode="cover"
        />
        <Text fontSize="xl" marginTop={2}>{item.title}</Text>
        <Button onPress={() => {
          setSelectedItem(item);
          setModalVisible(true);
        }}>
          Read More
        </Button>
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal visible={modalVisible} animationType="slide">
        <Box flex={1} justifyContent="center" alignItems="center">
          <Text fontSize="xl">{selectedItem && selectedItem.title}</Text>
          <Image
            source={{ uri: selectedItem && selectedItem.image }}
            alt={selectedItem && selectedItem.title}
            size="xl"
            resizeMode="cover"
          />
          <Button onPress={() => setModalVisible(false)}>Close Modal</Button>
        </Box>
      </Modal>
    </NativeBaseProvider>
  );
};

export default List;
