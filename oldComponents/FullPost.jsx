// import React from "react";
// import axios from "axios";
// import styled from "styled-components/native";
// import { Loading } from "../components/Loading";
// import { ScrollView } from "react-native";

// const CurrentPost = styled.View`
//   padding: 20px;
// `;
// const PostImage = styled.Image`
//   border-radius: 10px;
//   width: 100%;
//   height: 250px;
//   margin-bottom: 20px;
//   margin-left: auto;
//   margin-right: auto;
// `;

// const PostText = styled.Text`
//   font-size: 18px;
//   line-height: 24px;
// `;

// export const FullPostScreen = ({ route, navigation }) => {
//   const [isLoading, setIsLoading] = React.useState(true);
//   const [data, setData] = React.useState([]);
//   const { id, title } = route.params;
//   React.useEffect(() => {
//     navigation.setOptions({ title });
//     axios
//       .get("https://65e087ecd3db23f7624985a9.mockapi.io/test_posts/" + id)
//       .then(({ data }) => {
//         setData(data);
//       })
//       .catch((err) => {
//         console.log(err);
//         Alert.alert("Ошибка", "Не удалось получить статью");
//       })
//       .finally(() => setIsLoading(false));
//   }, []);

//   if (isLoading) {
//     return <Loading />;
//   }

//   return (
//     <ScrollView>
//       <CurrentPost>
//         <PostImage
//           source={{
//             uri: data.imageUrl,
//           }}
//           style={{ width: 100, height: 100 }}
//         />

//         <PostText>{data.text}</PostText>
//       </CurrentPost>
//     </ScrollView>
//   );
// };
