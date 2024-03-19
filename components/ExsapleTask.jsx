// import { View, Image, Text, StyleSheet } from "react-native";
// import BouncyCheckbox from "react-native-bouncy-checkbox";

// import React from "react";
// const dataTasks = [
//   {
//     id: 1,
//     title: "Study lesson",
//     categoryUrl:
//       "https://zametkinapolyah.ru/wp-content/uploads/2016/07/want31088-1zcV2Q1441993263.png",
//     date: "20.10.2022",
//     time: "",
//     notion: "giorgi",
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     title: "Run 5k",
//     categoryUrl:
//       "https://w7.pngwing.com/pngs/539/633/png-transparent-trophy-medal-trophy-medal-%D0%BA%D1%83%D0%B1%D0%BE%D0%BA-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9-%D0%BA%D1%83%D0%B1%D0%BE%D0%BA.png",
//     date: "20.10.2022",
//     time: "4:00pm",
//     notion: "roman",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     title: "Go to party",
//     categoryUrl:
//       "https://w7.pngwing.com/pngs/467/887/png-transparent-the-scottish-beauty-school-calendar-date-time-kalendar-calendar-time-calendar-date-thumbnail.png",
//     date: "20.10.2022",
//     time: "10:00pm",
//     notion: "hi",
//     isCompleted: false,
//   },
//   {
//     id: 4,
//     title: "Game meetup",
//     categoryUrl:
//       "https://w7.pngwing.com/pngs/467/887/png-transparent-the-scottish-beauty-school-calendar-date-time-kalendar-calendar-time-calendar-date-thumbnail.png",
//     date: "20.10.2022",
//     time: "1:00pm",
//     notion: "hi",
//     isCompleted: false,
//   },
//   {
//     id: 5,
//     title: "Take out trash",
//     categoryUrl:
//       "https://zametkinapolyah.ru/wp-content/uploads/2016/07/want31088-1zcV2Q1441993263.png",
//     date: "20.10.2022",
//     time: "10:00pm",
//     notion: "hi",
//     isCompleted: false,
//   },
// ];

// export const ListTasks = () => {
//   const [isCompleted, setIsCompleted] = React.useState([]);
//   const [todo, setTodo] = React.useState(dataTasks);

//   const handleCardClick = (id) => {
//     if (isCompleted.find((item) => item.id === id)) {
//       let newElementSetTodo = isCompleted.find((item) => item.id === id);
//       setTodo([...todo, newElementSetTodo]);
//       let copyIsCompleted = [...isCompleted];
//       setIsCompleted(copyIsCompleted.filter((item) => item.id !== id));
//     } else {
//       let newIsCompleted = todo.find((item) => item.id === id);
//       setIsCompleted([...isCompleted, newIsCompleted]);
//       let copyTodo = [...todo];
//       setTodo(copyTodo.filter((item) => item.id !== id));
//     }
//   };

//   const itemsTasks = todo.map((item) => (
//     <ItemTask
//       key={item.id}
//       id={item.id}
//       urlItem={item.categoryUrl}
//       titleItem={item.title}
//       timeItem={item.time}
//       isSelectedItems={item.isCompleted}
//       onCardClick={handleCardClick}
//     />
//   ));
//   const itemsTasksIsCompleted = isCompleted.map((item) => (
//     <ItemTask
//       key={item.id}
//       id={item.id}
//       urlItem={item.categoryUrl}
//       titleItem={item.title}
//       timeItem={item.time}
//       isSelectedItems={!item.isCompleted}
//       onCardClick={handleCardClick}
//     />
//   ));
//   return (
//     <View>
//       <View style={styles.tasks}>{itemsTasks}</View>
//       <Text style={styles.titleCompleted}>Completed</Text>
//       <View style={styles.tasks}>{itemsTasksIsCompleted}</View>
//     </View>
//   );
// };

// const ItemTask = ({
//   urlItem,
//   titleItem,
//   timeItem,
//   isSelectedItems,
//   onCardClick,
//   id,
// }) => {
//   const handleClick = () => {
//     onCardClick(id);
//   };
//   return (
//     <View style={styles.task}>
//       <Image
//         style={
//           !isSelectedItems
//             ? styles.taskImage
//             : [styles.taskImage, styles.completed]
//         }
//         source={{
//           uri: urlItem,
//         }}
//       />
//       <View style={styles.taskTitle}>
//         <Text
//           style={
//             !isSelectedItems
//               ? styles.taskTitleText
//               : [styles.taskTitleText, styles.completed]
//           }
//         >
//           {titleItem}
//         </Text>
//         <Text
//           style={
//             !isSelectedItems
//               ? styles.taskTitleTime
//               : [[styles.taskTitleTime, styles.completed]]
//           }
//         >
//           {timeItem}
//         </Text>
//       </View>
//       <BouncyCheckbox
//         onPress={handleClick}
//         size={25}
//         unfillColor="#FFFFFF"
//         fillColor="#4A3780"
//         iconStyle={{ borderRadius: 3 }}
//         innerIconStyle={{
//           borderWidth: 1,
//           borderRadius: 3,
//           borderColor: "#4A3780",
//         }}
//         isChecked={isSelectedItems}
//         disableBuiltInState
//       />
//     </View>
//   );
// };

// //  const Tasks = () => {
// //   return (
// //     <View styles={styles.tasksContainer}>
// //       <ListTasks />
// //     </View>
// //   );
// // };

// const styles = StyleSheet.create({
//   tasks: {
//     // flex: 1,
//     minHeight: 80,
//     backgroundColor: "#FFFFFF",
//     borderRadius: 15,
//     bottom: 30,
//     position: "relative",
//     marginRight: 16,
//     marginLeft: 16,
//     marginBottom: 24,
//     flexDirection: "column",
//   },
//   task: {
//     minHeight: 80,
//     borderBottomWidth: 1,
//     borderBottomColor: "#E5E9ED",
//     padding: 16,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   taskImage: { width: 48, height: 48 },
//   taskTitle: { marginLeft: 12, marginRight: "auto" },
//   taskTitleText: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   taskTitleTime: {
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "rgba(0, 0, 0, 0.7)",
//   },
//   titleCompleted: {
//     marginRight: 16,
//     marginLeft: 16,
//     position: "relative",
//     bottom: 30,
//     marginBottom: 24,
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   completed: {
//     opacity: 0.5,
//     textDecorationLine: "line-through",
//   },
//   // taskCheckBox: {
//   //   width: 25,
//   //   height: 25,
//   //   borderColor: "#4A3780",
//   //   borderWidth: 1,
//   //   borderRadius: 3,
//   //   backgroundColor: "white",
//   // },
// });
