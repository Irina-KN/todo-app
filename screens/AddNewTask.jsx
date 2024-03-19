import { Text, View, ScrollView } from "react-native";
import React from "react";
import { TasksNew } from "../components/TasksNew";

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

export const AddNewTask = () => {
  const [todo, setTodo] = React.useState(dataTasks);
  const changTodo = (id) => {
    const copyTodo = [...todo];
    const currentTodo = copyTodo.find((item) => item.id === id);
    currentTodo.isCompleted = !currentTodo.isCompleted;
    setTodo([...copyTodo]);
  };
  console.log(todo);
  return (
    <ScrollView>
      <View>
        {todo.map((item) => (
          <TasksNew todo={item} key={item.id} changTodo={changTodo} />
        ))}
      </View>
    </ScrollView>
  );
};
