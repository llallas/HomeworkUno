import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function product() {
  return (
    <View style ={styles.container} >
          <Image style={styles.nana} source={require("../../assets/images/nanan.png")}></Image>
          <Text><h3>A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, cooking bananas are called plantains, distinguishing them from dessert bananas. </h3></Text>
          </View>
  )
}




const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 25,
    backgroundColor:"#ccc",
},
nana:{
  height: "400px",
}

})