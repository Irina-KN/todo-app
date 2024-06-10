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
import { ChangeDate, ChangeTime } from "../../components/ChangeDateTime";
import { HeaderAddTaskScreen } from "./HeaderAddTaskScreen";
import { ButtonMoveBetweenPages } from "../../components/ButtonMoveBetweenPages";
import { Task } from "../../index";

const Error = ({ filled }) => {
  const textError = "The field is not filled in";
  if (!filled) {
    return <Text style={styles.textError}>*{textError}</Text>;
  }
};

const TaskFields = ({ chooseViewTodo, props, newTask, navigation }) => {
  const [titleNew, onChangeText] = React.useState(chooseViewTodo?.title);
  const [dateNew, onChangeDate] = React.useState(chooseViewTodo?.date);
  const [timeNew, onChangeTime] = React.useState(chooseViewTodo?.time);
  const [notesNew, onChangeNotes] = React.useState(chooseViewTodo?.notion);
  const [category, onChangeCategory] = React.useState(
    chooseViewTodo ? chooseViewTodo.category : "Event"
  );
  const uniqueId = chooseViewTodo
    ? chooseViewTodo.id
    : Math.round(Math.random() * 1000);
  const [filled, setFilled] = React.useState(true);
  newTask["id"] = uniqueId;
  newTask["title"] = titleNew;
  newTask["category"] = category;
  newTask["date"] = dateNew;
  newTask["time"] = timeNew;
  newTask["notion"] = notesNew;
  return (
    <View style={styles.containerNewTask}>
      <View>
        <Text style={[styles.inputLabel]}>Task Title*</Text>
        <TextInput
          style={filled ? styles.input : [styles.input, styles.required]}
          onBlur={() => {
            if (titleNew) {
              setFilled(true);
            } else {
              setFilled(false);
            }
          }}
          onChangeText={onChangeText}
          value={titleNew}
          placeholder="Task Title"
        />
        <Error filled={filled} />
      </View>

      <View style={styles.category}>
        <Text style={[styles.inputLabel]}>Category</Text>
        <View style={styles.chooseCategory}>
          <Pressable
            style={
              category === "Event"
                ? [styles.chooseImageCategory, styles.active]
                : styles.chooseImageCategory
            }
            onPress={() => {
              onChangeCategory("Event");
            }}
          >
            <Image source={require("../../images/CategoryEvent.png")} />
          </Pressable>
          <Pressable
            style={
              category === "Goal"
                ? [styles.chooseImageCategory, styles.active]
                : styles.chooseImageCategory
            }
            onPress={() => {
              onChangeCategory("Goal");
            }}
          >
            <Image source={require("../../images/CategoryGoal.png")} />
          </Pressable>
          <Pressable
            style={
              category === "Task"
                ? [styles.chooseImageCategory, styles.active]
                : styles.chooseImageCategory
            }
            onPress={() => {
              onChangeCategory("Task");
            }}
          >
            <Image source={require("../../images/CategoryTask.png")} />
          </Pressable>
        </View>
      </View>

      <View style={styles.containerDateTime}>
        <View style={styles.fieldsDateTime}>
          <Text style={[styles.inputLabel]}>Date: {dateNew}</Text>
          <ChangeDate onChangeDate={onChangeDate} />
        </View>
        <View style={styles.fieldsDateTime}>
          <Text style={[styles.inputLabel]}>Time: {timeNew}</Text>
          <ChangeTime onChangeTime={onChangeTime} />
        </View>
      </View>

      <View>
        <Text style={[styles.inputLabel]}>Notes</Text>

        <TextInput
          style={[styles.input, styles.notes]}
          multiline={true}
          rows={4}
          textAlignVertical={"top"}
          onChangeText={onChangeNotes}
          value={notesNew}
          placeholder="Notes"
        />
      </View>
      <Pressable
        style={styles.buttonSave}
        onPress={() => {
          findNewTask = props.todo.find((item) => item.id === newTask.id);

          if (titleNew) {
            props.setTodo(
              findNewTask ? [...props.todo] : [...props.todo, newTask]
            );
            navigation.navigate("HomeScreen");
          } else {
            setFilled(false);
          }
        }}
      >
        <Text style={styles.buttonTextSave}>Save</Text>
      </Pressable>
    </View>
  );
};

export const AddNewTaskScreen = ({ navigation, route }) => {
  let idViewTodo = route.params.idChooseTodo;
  let chooseViewTodo = route.params.todo.find((item) => item.id === idViewTodo);
  const props = route.params;
  const newTask = chooseViewTodo ? chooseViewTodo : { ...Task };

  console.log("chooseViewTodo", chooseViewTodo);
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.container}
    >
      <HeaderAddTaskScreen navigation={navigation} />
      <TaskFields
        chooseViewTodo={chooseViewTodo}
        props={props}
        newTask={newTask}
        navigation={navigation}
      />
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
    // marginRight: 16,
    // marginLeft: 16,
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
