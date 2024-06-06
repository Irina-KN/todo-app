import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./Home";
import { AddNewTask } from "./AddNewTask";
import { ViewTask } from "./ViewTask";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddNewTask" component={AddNewTask} />
        <Stack.Screen name="ViewTask" component={ViewTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
