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
  Dimensions,
} from "react-native";

import React from "react";
import { Tasks } from "../components/Tasks";

const dataTasks = [
  {
    id: 1,
    title: "Study lesson",
    category: "Task",
    date: "20.01.2022",
    time: "",
    notion: "giorgi",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Run 5k",
    category: "Goal",
    date: "20.10.2022",
    time: "4:00",
    notion: "roman",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Go to party",
    category: "Goal",
    date: "20.11.2022",
    time: "10:00",
    notion: "hi",
    isCompleted: false,
  },
  {
    id: 4,
    title: "Game meetup",
    category: "Event",
    date: "20.09.2022",
    time: "13:00",
    notion: "hi",
    isCompleted: false,
  },
  {
    id: 5,
    title: "Take out trash",
    category: "Task",
    date: "20.10.2022",
    time: "12:00",
    notion: "hi",
    isCompleted: false,
  },
];

export const HomeScreen = ({ navigation }) => {
  const [todo, setTodo] = React.useState(dataTasks);

  return (
    <ScrollView style={styles.container}>
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
              source={require("../images/arrow-left-s-line.png")}
            />
          </TouchableOpacity>

          <Text style={styles.titleDate}>29 марта 2024</Text>
          <Text style={styles.ghost}></Text>
        </View>
        <Text style={styles.titleScreen}>My Todo List</Text>
      </View>
      <View style={styles.tasksContainer}>
        <Tasks todo={todo} setTodo={setTodo} />

        <TouchableOpacity
          style={styles.buttonAddNewTask}
          onPress={() =>
            navigation.navigate("AddNewTask", { todo: todo, setTodo: setTodo })
          }
        >
          <Text style={styles.buttonTextAddNewTask}>Add New Task</Text>
        </TouchableOpacity>
      </View>

      <StatusBar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#F1F5F9",
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
  tasksContainer: {
    bottom: 30,
    borderRadius: 25,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: "#F1F5F9",
  },
  buttonAddNewTask: {
    // alignItems: "center",
    // borderRadius: 30,
    // marginRight: 16,
    // marginLeft: 16,
    // marginBottom: 24,
    // backgroundColor: "#4A3780",
    // padding: 10,
    borderRadius: 30,
    width: Dimensions.get("window").width - 16 * 2,
    // marginTop: "auto",
    marginBottom: 24,
    backgroundColor: "#4A3780",
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextAddNewTask: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
});
