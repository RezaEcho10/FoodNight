import { View, Text } from "react-native";
import Home from "./Screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ResturantDetails from "./Screens/ResturantDetails";

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="ResturantDetails" component={ResturantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

