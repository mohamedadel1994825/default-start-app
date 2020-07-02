import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";
import BottomTabNavigator from "./BottomTabNavigator";
import { createDrawerNavigator } from '@react-navigation/drawer';
// const ProductsNavigator = createStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
//       },
//       headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
//     }
//   }
// );
// const Stack = createStackNavigator();
// const MyTabs = () => (
//   <Stack.Navigator>
//       <Stack.Screen name="Root" component={BottomTabNavigator} />
//     </Stack.Navigator>
// );
const Drawer = createDrawerNavigator();
const MyDrawer=()=>(
  <NavigationContainer>
     <Drawer.Navigator >
        <Drawer.Screen name="Home" component={BottomTabNavigator} />
        <Drawer.Screen name="Products" component={ProductsOverviewScreen} />
      </Drawer.Navigator>
  </NavigationContainer>
)
export default MyDrawer;
