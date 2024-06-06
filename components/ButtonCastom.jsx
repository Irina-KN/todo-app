import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  BackHandler,
  Alert,
} from "react-native";

import React from "react";

export const ButtonCastom = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.buttonAddNewTask}
      onPress={() =>
        navigation.navigate("AddNewTask", { todo: todo, setTodo: setTodo })
      }
    >
      <Text style={styles.buttonTextAddNewTask}>titleButton</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonAddNewTask: {
    alignItems: "center",
    borderRadius: 30,
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 24,
    backgroundColor: "#4A3780",
    padding: 10,
  },
  buttonTextAddNewTask: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
});
