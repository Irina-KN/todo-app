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
import { dataTasks } from "../../index";
import React from "react";
import { HeaderHomeScreen } from "./HeaderHomeScreen";
import { ButtonMoveBetweenPages } from "../../components/ButtonMoveBetweenPages";
import { CreateTask } from "./Tasks/CreateTask";

export const HomeScreen = ({ navigation }) => {
  const [todo, setTodo] = React.useState(dataTasks);
  const Completed = () => {
    const findItemCompleted = todo.find((item) => item.isCompleted);
    if (findItemCompleted) {
      return <Text style={styles.titleCompleted}>Completed</Text>;
    } else {
      return <Text style={styles.titleCompleted}>No completed tasks</Text>;
    }
  };
  const completedTasks = todo.map((item, i) => {
    if (!item.isCompleted) {
      return <CreateTask item={item} todo={todo} setTodo={setTodo} key={i} />;
    }
  });
  const noCompletedTasks = todo.map((item, i) => {
    if (item.isCompleted) {
      return <CreateTask item={item} todo={todo} setTodo={setTodo} key={i} />;
    }
  });
  return (
    <ScrollView style={styles.container}>
      <HeaderHomeScreen />
      <View style={styles.tasks}>
        <View style={styles.containerTasks}>{completedTasks}</View>
        <Completed />
        <View style={styles.containerTasks}>{noCompletedTasks}</View>
      </View>
      <ButtonMoveBetweenPages
        textOnButton={"Add New Task"}
        namedScreen={"AddNewTaskScreen"}
        navigation={navigation}
        todo={todo}
        setTodo={setTodo}
      />
      <StatusBar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#F1F5F9",
  },
  tasks: {
    bottom: 30,
    borderRadius: 25,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: "#F1F5F9",
  },
  containerTasks: {
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  titleCompleted: {
    position: "relative",
    marginTop: 24,
    marginBottom: 24,
    paddingLeft: 15,
    fontSize: 16,
    fontWeight: "bold",
  },
});
