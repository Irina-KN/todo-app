import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  BackHandler,
  Alert,
} from "react-native";
import React from "react";
import { MONTH } from "../../index";

export const HeaderHomeScreen = () => {
  let date = new Date();
  let day = date.getDate();
  let month = MONTH[date.getMonth()];
  let newDate = [day, month, date.getFullYear()].join(" ");
  return (
    <View style={styles.header}>
      <View style={styles.titleHeaderFirst}>
        <TouchableOpacity
          style={styles.buttonExit}
          onPress={() => {
            Alert.alert("", "Are you sure you want to get out?", [
              {
                text: "Cancel",
                onPress: () => null,
                style: "cancel",
              },
              { text: "YES", onPress: () => BackHandler.exitApp() },
            ]);
            return true;
          }}
        >
          <Image
            style={styles.buttonExitImage}
            source={require("../../images/arrow-left-s-line.png")}
          />
        </TouchableOpacity>

        <Text style={styles.titleDate}>{newDate}</Text>
        <Text style={styles.ghost}></Text>
      </View>
      <Text style={styles.titleScreen}>My Todo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4A3780",
    height: 200,
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    gap: 24,
  },
  titleHeaderFirst: {
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
  buttonExitImage: {},
  titleDate: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
  ghost: { width: 48 },
  titleScreen: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
  },
});
