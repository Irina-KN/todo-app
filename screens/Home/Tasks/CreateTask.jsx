import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const CreateTask = ({ item, todo, setTodo }) => {
  const navigation = useNavigation();
  const catalogUrl = {
    Task: require("../../../images/CategoryTask.png"),
    Goal: require("../../../images/CategoryGoal.png"),
    Event: require("../../../images/CategoryEvent.png"),
  };
  let addressURL = catalogUrl[item.category];
  const changTodo = (id) => {
    const copyTodo = [...todo];
    const currentTodo = copyTodo.find((item) => item.id === id);
    currentTodo.isCompleted = !currentTodo.isCompleted;
    setTodo([...copyTodo]);
  };
  const completedTask = item.isCompleted;

  return (
    <View style={styles.tasks}>
      <Pressable
        onPress={() => {
          navigation.navigate("ViewTaskScreen", {
            todo: todo,
            setTodo: setTodo,
            idChooseTodo: item.id,
          });
        }}
      >
        <View style={styles.task}>
          <View
            style={
              completedTask
                ? [styles.containerTaskImage, styles.completed]
                : styles.containerTaskImage
            }
          >
            <Image style={styles.taskImage} source={addressURL} />
          </View>

          <View style={styles.taskTitle}>
            <Text
              style={
                completedTask
                  ? [styles.taskTitleText, styles.completed]
                  : styles.taskTitleText
              }
            >
              {item.title}
            </Text>
            <Text
              style={
                completedTask
                  ? [styles.taskTitleTime, styles.completed]
                  : styles.taskTitleTime
              }
            >
              {item.time}
            </Text>
          </View>
          <BouncyCheckbox
            onPress={() => changTodo(item.id)}
            size={25}
            unfillColor="#FFFFFF"
            fillColor="#4A3780"
            iconStyle={{ borderRadius: 3 }}
            innerIconStyle={{
              borderWidth: 1,
              borderRadius: 3,
              borderColor: "#4A3780",
            }}
            isChecked={item.isCompleted}
            disableBuiltInState
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tasks: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    // position: "relative",
    // marginBottom: 24,
    // flexDirection: "column",
  },
  task: {
    minHeight: 80,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E9ED",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  // "task:last-child": {
  //   borderBottomWidth: 0,
  // },
  taskImage: {
    width: 48,
    height: 48,
  },
  containerTaskImage: {
    width: 48,
    height: 48,
    borderRadius: 25,
    // backgroundColor: "#E7E2F3",
    alignItems: "center",
    justifyContent: "center",
  },
  taskTitle: { marginLeft: 12, marginRight: "auto" },
  taskTitleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taskTitleTime: {
    fontSize: 14,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.7)",
  },
  titleCompleted: {
    position: "relative",
    marginBottom: 24,
    paddingLeft: 15,
    fontSize: 16,
    fontWeight: "bold",
  },
  completed: {
    opacity: 0.6,
    textDecorationLine: "line-through",
  },
});
