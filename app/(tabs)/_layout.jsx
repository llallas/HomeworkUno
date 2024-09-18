import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function _layout() {
  return (
   <Tabs screenOptions={{
    tabBarActiveTintColor: Colors.links,
   }}>
    <Tabs.Screen name ="home" options={{
        title: "Bananas.com",
        tabBarIcon:({color}) => <Ionicons name='home' size={24} color={color}/>,
        }}/>
    <Tabs.Screen name ="product" options={{
        title: "Product Page",
        tabBarIcon:({color}) => <FontAwesome name="product-hunt" size={24} color={color}/>,
        }}/>
    <Tabs.Screen name ="contact" options={{
        title: "Contact Page",
        tabBarIcon:({color}) => <FontAwesome name="envelope-o" size={24} color={color} />,
        }}/>
   </Tabs>
   
  );
}