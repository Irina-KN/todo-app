import styled from "styled-components/native";

const Todo = styled.View`
  background-color: DBECF6;
  flex-direction: row;
  gap: 15px;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 15px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;
const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;
const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 2px;
`;

const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + "...";
  }
  return str;
};
export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <Todo>
      <PostImage source={{ uri: imageUrl }} />
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
      </PostDetails>
    </Todo>
  );
};
