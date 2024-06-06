import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import { ChangeDate, ChangeTime } from "../components/ChangeDateTime";

export const ViewTask = ({ navigation, route }) => {
  const catalogUrl = {
    Task: require("../images/CategoryTask.png"),
    Goal: require("../images/CategoryGoal.png"),
    Event: require("../images/CategoryEvent.png"),
  };
  let idChooseTodo = route.params.idChooseTodo;
  const dataCurrentTodo = route.params.todo.find(
    (item) => item.id === idChooseTodo
  );
  const titleNew = dataCurrentTodo.title;
  const dateNew = dataCurrentTodo.date;
  const timeNew = dataCurrentTodo.time;
  const notesNew = dataCurrentTodo.notion;
  let addressURL = catalogUrl[dataCurrentTodo.category];
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.buttonExit}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Image source={require("../images/CloseX.png")} />
          </Pressable>
        </View>
        <Text style={styles.titleScreen}>View Task</Text>
        <Text style={styles.ghost}></Text>
      </View>
      <View style={styles.containerNewTask}>
        <View>
          <Text style={[styles.inputLabel]}>Task Title</Text>
          <Text style={styles.input}>{titleNew}</Text>
        </View>

        <View style={styles.category}>
          <Text style={[styles.inputLabel]}>Category</Text>
          <View style={styles.chooseCategory}>
            <Pressable
              style={[styles.chooseImageCategory, styles.active]}
              onPress={() => {
                onChangeCategory("Event");
              }}
            >
              <Image source={addressURL} />
            </Pressable>
            {/* <Pressable
              style={
                category === "Goal"
                  ? [styles.chooseImageCategory, styles.active]
                  : styles.chooseImageCategory
              }
              onPress={() => {
                onChangeCategory("Goal");
              }}
            >
              <Image source={require("../images/CategoryGoal.png")} />
            </Pressable> */}
            {/* <Pressable
              style={
                category === "Task"
                  ? [styles.chooseImageCategory, styles.active]
                  : styles.chooseImageCategory
              }
              onPress={() => {
                onChangeCategory("Task");
              }}
            >
              <Image source={require("../images/CategoryTask.png")} />
            </Pressable> */}
          </View>
        </View>

        <View style={styles.containerDateTime}>
          <View style={styles.fieldsDateTime}>
            <Text style={[styles.inputLabel]}>Date: {dateNew}</Text>
          </View>
          <View style={styles.fieldsDateTime}>
            <Text style={[styles.inputLabel]}>Time: {timeNew}</Text>
          </View>
        </View>

        <View>
          <Text style={[styles.inputLabel]}>Notes</Text>
          <Text style={[styles.input, styles.notes]}>{notesNew}</Text>
        </View>
      </View>

      <Pressable
        style={styles.buttonSave}
        onPress={() => {
          // props.setTodo([...props.todo, newElement]);
          navigation.navigate("AddNewTask", {
            idChooseTodo: idChooseTodo,
            todo: route.params.todo,
            setTodo: route.params.setTodo,
          });
        }}
      >
        <Text style={styles.buttonTextSave}>Edit</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#F1F5F9",
  },
  container: {
    flex: 1,
  },
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
  containerNewTask: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 24,
  },
  input: {
    backgroundColor: "#FFFFFF",
    // minHeight: 55,
    borderRadius: 10,
    marginTop: 8,
    padding: 17,
  },
  inputLabel: { fontWeight: "bold", fontSize: 14 },
  category: { flexDirection: "row", gap: 24, alignItems: "center" },
  chooseCategory: {
    flexDirection: "row",
    gap: 16,
  },
  chooseImageCategory: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 25,
  },
  containerDateTime: {
    width: "100%",
    flexWrap: "nowrap",
    gap: 15,
    flexDirection: "row",
  },
  fieldsDateTime: { width: "49%", gap: 10 },
  // notes: { height: 177 },
  buttonSave: {
    borderRadius: 30,
    marginRight: 16,
    marginLeft: 16,
    width: Dimensions.get("window").width - 16 * 2,
    // marginTop: "auto",
    marginBottom: 24,
    backgroundColor: "#4A3780",
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextSave: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  active: { borderColor: "green" },
  required: { borderColor: "red", borderWidth: 2, borderStyle: "solid" },
  textError: { color: "red", fontSize: 12, marginLeft: 10 },
});
