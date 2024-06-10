import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./Home/HomeScreen";
import { AddNewTaskScreen } from "./AddTask/AddNewTaskScreen";
import { ViewTaskScreen } from "./ViewTask/ViewTaskScreen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddNewTaskScreen" component={AddNewTaskScreen} />
        <Stack.Screen name="ViewTaskScreen" component={ViewTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
