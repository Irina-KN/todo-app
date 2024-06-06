import { View, Image, Text, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import React from "react";
const dataTasks = [
  {
    id: 1,
    title: "Study lesson",
    categoryUrl:
      "https://cdn4.iconfinder.com/data/icons/top-search-7/128/_menu_control_options_list_more-1024.png",
    date: "20.10.2022",
    time: "",
    notion: "giorgi",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Run 5k",
    categoryUrl:
      "https://cdn2.iconfinder.com/data/icons/pet-and-veterinary-1/85/trophy_cup_competition_award_price_winner-1024.png",
    date: "20.10.2022",
    time: "4:00pm",
    notion: "roman",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Go to party",
    categoryUrl:
      "https://cdn2.iconfinder.com/data/icons/pet-and-veterinary-1/85/trophy_cup_competition_award_price_winner-1024.png",
    date: "20.10.2022",
    time: "10:00pm",
    notion: "hi",
    isCompleted: false,
  },
  {
    id: 4,
    title: "Game meetup",
    categoryUrl:
      "https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/calendar-1024.png",
    date: "20.10.2022",
    time: "1:00pm",
    notion: "hi",
    isCompleted: false,
  },
  {
    id: 5,
    title: "Take out trash",
    categoryUrl:
      "https://cdn4.iconfinder.com/data/icons/top-search-7/128/_menu_control_options_list_more-1024.png",
    date: "20.10.2022",
    time: "10:00pm",
    notion: "hi",
    isCompleted: false,
  },
];

const ListTasks = () => {
  const [isCompleted, setIsCompleted] = React.useState([]);
  const [todo, setTodo] = React.useState(dataTasks);

  const handleCardClick = (id) => {
    if (isCompleted.find((item) => item.id === id)) {
      let newElementSetTodo = isCompleted.find((item) => item.id === id);
      setTodo([...todo, newElementSetTodo]);
      let copyIsCompleted = [...isCompleted];
      setIsCompleted(copyIsCompleted.filter((item) => item.id !== id));
    } else {
      let newIsCompleted = todo.find((item) => item.id === id);
      setIsCompleted([...isCompleted, newIsCompleted]);
      let copyTodo = [...todo];
      setTodo(copyTodo.filter((item) => item.id !== id));
    }
  };

  const itemsTasks = todo.map((item) => (
    <ItemTask
      key={item.id}
      id={item.id}
      urlItem={item.categoryUrl}
      titleItem={item.title}
      timeItem={item.time}
      isSelectedItems={item.isCompleted}
      onCardClick={handleCardClick}
    />
  ));
  const itemsTasksIsCompleted = isCompleted.map((item) => (
    <ItemTask
      key={item.id}
      id={item.id}
      urlItem={item.categoryUrl}
      titleItem={item.title}
      timeItem={item.time}
      isSelectedItems={!item.isCompleted}
      onCardClick={handleCardClick}
    />
  ));
  return (
    <View>
      <View style={styles.tasks}>{itemsTasks}</View>
      <Text style={styles.titleCompleted}>Completed</Text>
      <View style={styles.tasks}>{itemsTasksIsCompleted}</View>
    </View>
  );
};

const ItemTask = ({
  urlItem,
  titleItem,
  timeItem,
  isSelectedItems,
  onCardClick,
  id,
}) => {
  const handleClick = () => {
    onCardClick(id);
  };
  return (
    <View style={styles.task}>
      <View style={styles.containerTaskImage}>
        <Image
          style={
            !isSelectedItems
              ? styles.taskImage
              : [styles.taskImage, styles.completed]
          }
          source={{
            uri: urlItem,
          }}
        />
      </View>

      <View style={styles.taskTitle}>
        <Text
          style={
            !isSelectedItems
              ? styles.taskTitleText
              : [styles.taskTitleText, styles.completed]
          }
        >
          {titleItem}
        </Text>
        <Text
          style={
            !isSelectedItems
              ? styles.taskTitleTime
              : [[styles.taskTitleTime, styles.completed]]
          }
        >
          {timeItem}
        </Text>
      </View>
      <BouncyCheckbox
        onPress={handleClick}
        size={25}
        unfillColor="#FFFFFF"
        fillColor="#4A3780"
        iconStyle={{ borderRadius: 3 }}
        innerIconStyle={{
          borderWidth: 1,
          borderRadius: 3,
          borderColor: "#4A3780",
        }}
        isChecked={isSelectedItems}
        disableBuiltInState
      />
    </View>
  );
};

export const Tasks = () => {
  return (
    <View styles={styles.tasksContainer}>
      <ListTasks />
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
    minHeight: 80,
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
