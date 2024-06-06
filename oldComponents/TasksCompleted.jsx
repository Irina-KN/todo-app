import { View, Image, Text, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import React from "react";

export const TasksCompleted = ({ todo, changTodo }) => {
  let listCompleted = todo.map((item) => {
    if (item.isCompleted) {
      return (
        <View key={item.id} style={styles.task}>
          <View style={styles.containerTaskImage}>
            <Image
              style={[styles.taskImage, styles.completed]}
              source={{
                uri: item.categoryUrl,
              }}
            />
          </View>

          <View style={styles.taskTitle}>
            <Text
              style={
                !item.isCompleted
                  ? styles.taskTitleText
                  : [styles.taskTitleText, styles.completed]
              }
            >
              {item.title}
            </Text>
            <Text
              style={
                !item.isCompleted
                  ? styles.taskTitleTime
                  : [[styles.taskTitleTime, styles.completed]]
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
      );
    }
  });
  return (
    <View>
      <Text style={styles.titleCompleted}> COmpleted</Text>
      {listCompleted}
    </View>
  );
};

const styles = StyleSheet.create({
  tasks: {
    // flex: 1,
    minHeight: 80,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    bottom: 30,
    position: "relative",
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 24,
    flexDirection: "column",
  },
  task: {
    // minHeight: 80,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E9ED",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  taskImage: {
    width: 24,
    height: 24,
  },
  containerTaskImage: {
    width: 48,
    height: 48,
    borderRadius: 25,
    backgroundColor: "#E7E2F3",
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
    marginRight: 16,
    marginLeft: 16,
    position: "relative",
    bottom: 30,
    marginBottom: 24,
    fontSize: 16,
    fontWeight: "bold",
  },
  completed: {
    opacity: 0.5,
    textDecorationLine: "line-through",
  },
  // taskCheckBox: {
  //   width: 25,
  //   height: 25,
  //   borderColor: "#4A3780",
  //   borderWidth: 1,
  //   borderRadius: 3,
  //   backgroundColor: "white",
  // },
});
