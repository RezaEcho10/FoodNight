import { View, Text } from "react-native";
import Home from "./Screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ResturantDetails from "./Screens/ResturantDetails";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from './Redux/store'

export default function App() {
  const store = configureStore()
  const Stack = createStackNavigator()
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="ResturantDetails" component={ResturantDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  )
}

