import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Cart from './screens/cart';
import Home from './screens/home';
export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="Cart" component={Cart}></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  );
}


