import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

export const ButtonMoveBetweenPages = ({
  textOnButton,
  namedScreen,
  navigation,
  todo,
  setTodo,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        if (todo) {
          navigation.navigate(namedScreen, { todo: todo, setTodo: setTodo });
        } else {
          navigation.navigate(namedScreen);
        }
      }}
    >
      <Text style={styles.buttonText}>{textOnButton}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    width: Dimensions.get("window").width - 16 * 2,
    marginBottom: 24,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#4A3780",
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
});
