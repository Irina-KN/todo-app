// import {
//   Alert,
//   View,
//   FlatList,
//   RefreshControl,
//   TouchableOpacity,
//   StatusBar,
//   Text,
// } from "react-native";
// import { Post } from "../components/Post";
// import axios from "axios";
// import React from "react";
// import { Loading } from "../components/Loading";
// import styled from "styled-components/native";

// const Header = styled.View`
//   background-color: rgb(74, 55, 128);
//   display: flex;
//   padding: 15px;
//   height: 222px;
//   justify-content: center;
//   align-items: center;

//   min-width: 390px;
// `;
// //
// const TopRow = styled.View`
//   position: relative;
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   margin-bottom: 24px;
//   justify-content: space-between;
// `;

// const ButtonExit = styled.Image`
//   display: flex;
//   width: 48px;
//   height: 48px;
//   border-radius: 25px;
//   background-color: white;
// `;

// const ContainersTitle = styled.View`
//   justify-self: flex-start;
//   align-items: center;
//   flex: 1;
//   gap: 42px;
// `;

// const TitleActiveDate = styled.Text`
//   height: 48px;
//   font-size: 16px;
//   color: rgb(225, 225, 225);
//   font-weight: 700;
//   line-height: 48px;
//   text-align: center;
// `;

// const Title = styled.Text`
//   font-size: 30px;
//   color: rgb(225, 225, 225);
//   font-weight: 700;
// `;

// export const HomeScreen = ({ navigation }) => {
//   const [isLoading, setIsLoading] = React.useState(true);
//   const [items, setItems] = React.useState([]);
//   const FetchPosts = () => {
//     setIsLoading(true);
//     axios
//       .get("https://65e087ecd3db23f7624985a9.mockapi.io/test_posts")
//       .then(({ data }) => {
//         setItems(data);
//       })
//       .catch((err) => {
//         console.log(err);
//         Alert.alert("Ошибка", "Ошибка при получении статей");
//       })
//       .finally(() => setIsLoading(false));
//   };
//   React.useEffect(FetchPosts, []);

//   if (isLoading) {
//     return <Loading />;
//   }
//   return (
//     <View>
//       <Header>
//         <TopRow>
//           <ButtonExit source={{ uri: "#" }}></ButtonExit>
//           <TitleActiveDate>20 october 2022</TitleActiveDate>
//           <View style={{ width: 48 }} />
//         </TopRow>

//         <Title>My Todo List</Title>
//       </Header>
//       {/* <FlatList
//         refreshControl={
//           <RefreshControl refreshing={isLoading} onRefresh={FetchPosts} />
//         }
//         data={items}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() =>
//               navigation.navigate("FullPost", {
//                 id: item.id,
//                 title: item.title,
//               })
//             }
//           >
//             <Post
//               title={item.title}
//               imageUrl={item.imageUrl}
//               createdAt={item.createdAt}
//             />
//           </TouchableOpacity>
//         )}
//       /> */}
//       {/* <StatusBar /> */}
//     </View>
//   );
// };
