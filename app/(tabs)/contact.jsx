import { StyleSheet, Text, TextInput, Button, View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
// export default function App() {}
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (name && email && message) {
      Alert.alert("Form Submitted", `Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      // Reset form after submit
      setName('');
      setEmail('');
      setMessage('');
    } else {
      Alert.alert("Error", "Please fill out all fields.");
    }
  };

export default function contact() {
  return (
    <View style ={styles.contain}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={text => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Your Message"
        value={message}
        onChangeText={text => setMessage(text)}
        multiline={true}
        numberOfLines={4}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>

    </View>
  )
}




const styles = StyleSheet.create({
  contain:{
    flex: 1,
    padding: 25,
    backgroundColor:"#ccc",
},
container: {
  flexGrow: 1,
  justifyContent: 'center',
  padding: 20,
  backgroundColor: '#fff',
},
title: {
  fontSize: 24,
  marginBottom: 20,
  textAlign: 'center',
},
input: {
  borderColor: '#ccc',
  borderWidth: 1,
  padding: 10,
  marginBottom: 15,
  borderRadius: 5,
},
textArea: {
  height: 100,
  textAlignVertical: 'top',
},
})