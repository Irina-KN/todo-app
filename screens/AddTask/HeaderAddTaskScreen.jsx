import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import React from "react";

export const HeaderAddTaskScreen = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.buttonExit}>
        <Pressable onPress={() => navigation.navigate("HomeScreen")}>
          <Image source={require("../../images/CloseX.png")} />
        </Pressable>
      </View>
      <Text style={styles.titleScreen}>Add New Task</Text>
      <Text style={styles.ghost}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4A3780",
    height: 96,
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 24,
    gap: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonExit: {
    backgroundColor: "#FFFFFF",
    width: 48,
    height: 48,
    padding: 12,
    borderRadius: 25,
  },
  ghost: { width: 48 },
  titleScreen: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
  },
});
