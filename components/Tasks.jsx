import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const catalogUrl = {
  Task: require("../images/CategoryTask.png"),
  Goal: require("../images/CategoryGoal.png"),
  Event: require("../images/CategoryEvent.png"),
};

export const Tasks = ({ todo, setTodo, navigation }) => {
  const changTodo = (id) => {
    const copyTodo = [...todo];
    const currentTodo = copyTodo.find((item) => item.id === id);
    currentTodo.isCompleted = !currentTodo.isCompleted;
    setTodo([...copyTodo]);
  };

  let findItemCompleted = todo.find((item) => item.isCompleted);

  const itemsTasks = todo.map((item) => {
    if (item.isCompleted === false) {
      return (
        <ItemTask
          key={item.id}
          todoItem={item}
          onCardClick={changTodo}
          setTodo={setTodo}
          todo={todo}
          navigation={navigation}
        />
      );
    }
  });

  const itemsTasksCompleted = todo.map((item) => {
    if (item.isCompleted === true) {
      return (
        <ItemTask
          key={item.id}
          todoItem={item}
          onCardClick={changTodo}
          setTodo={setTodo}
          todo={todo}
          navigation={navigation}
        />
      );
    }
  });

  return (
    <View>
      <View style={styles.tasks}>{itemsTasks}</View>
      <Text style={styles.titleCompleted}>
        {findItemCompleted ? "Completed" : "No completed tasks"}
      </Text>
      <View style={[styles.tasks, styles.completed]}>
        {itemsTasksCompleted}
      </View>
    </View>
  );
};

const ItemTask = ({ todoItem, onCardClick, setTodo, todo }) => {
  let addressURL = catalogUrl[todoItem.category];
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ViewTask", {
          todo: todo,
          setTodo: setTodo,
          idChooseTodo: todoItem.id,
        });
      }}
    >
      <View style={styles.task}>
        <View style={styles.containerTaskImage}>
          <Image style={styles.taskImage} source={addressURL} />
        </View>

        <View style={styles.taskTitle}>
          <Text style={styles.taskTitleText}>{todoItem.title}</Text>
          <Text style={styles.taskTitleTime}>{todoItem.time}</Text>
        </View>
        <BouncyCheckbox
          onPress={() => onCardClick(todoItem.id)}
          size={25}
          unfillColor="#FFFFFF"
          fillColor="#4A3780"
          iconStyle={{ borderRadius: 3 }}
          innerIconStyle={{
            borderWidth: 1,
            borderRadius: 3,
            borderColor: "#4A3780",
          }}
          isChecked={todoItem.isCompleted}
          disableBuiltInState
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tasks: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    position: "relative",
    marginBottom: 24,
    flexDirection: "column",
  },
  task: {
    minHeight: 80,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E9ED",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
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
