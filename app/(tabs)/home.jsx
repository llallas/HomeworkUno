import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import about from './product'

export default function home() {
  return (
    <View style={styles.container}>
          <Image style={styles.banner} source={require("../../assets/images/bana.png")}></Image>
          <Text style={styles.header}><h1>Best Bananas In town</h1></Text>

    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 25,
        backgroundColor:"#ccc",
    },
    banner:{
      justifyContent: 'center',
      alignItems: 'center',
      width: "800px",
      height: "300px",
    },
    header:{
      color: "#000",
      fontSize: 25,
    }

})