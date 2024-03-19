import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import React from "react";
import { Loading } from "../components/Loading";
import { Tasks } from "../components/Tasks";

export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  if (!isLoading) {
    return <Loading />;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleHeaderFirst}>
          <View style={styles.buttonExit}>
            <Image
              style={styles.buttonExitImage}
              source={require("../images/arrow-left-s-line.png")}
            />
          </View>

          <Text style={styles.titleDate}>20 october 2022</Text>
          <Text style={styles.ghost}></Text>
        </View>
        <Text style={styles.titleScreen}>My Todo List</Text>
      </View>

      <Tasks />
      <TouchableOpacity
        style={styles.buttonAddNewTask}
        onPress={() => navigation.navigate("AddNewTask")}
      >
        <Text style={styles.buttonTextAddNewTask}>Add New Task</Text>
      </TouchableOpacity>
      <StatusBar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#E0E0E0",
  },
  header: {
    backgroundColor: "#4A3780",
    height: 222,
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
