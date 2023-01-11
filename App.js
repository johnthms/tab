import React from 'react';
import { StyleSheet, View, Text } from "react-native";
// import Icon from "react-native-vector-icons/EvilIcons";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Videos from './src/Videos';
import Resources from './src/Resources';
import Qnbank from './src/Qnbank';
import Chapter from './src/Chapter';
const Tab=createMaterialTopTabNavigator();
function MyTab(){
  return(
    <Tab.Navigator
    screenOptions={{
    tabBarLabelStyle:{fontSize:12},
    tabBarItemStyle:{width:100},
    tabBarStyle:{backgroundColor:'white'}
  }}>
    <Tab.Screen name="Videos"
    component={Videos}/>
    <Tab.Screen name="Chapter"
    component={Chapter}/>
    <Tab.Screen name="Resources"
    component={Resources}/>
    <Tab.Screen name="Qn Bank"
    component={Qnbank}/>
    </Tab.Navigator>
  )
}
export default function App(){
  return(
    
    <NavigationContainer>
    <MyTab/>
    </NavigationContainer>
  )
}
