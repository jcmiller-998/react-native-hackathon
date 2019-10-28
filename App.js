import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import swooshImage from "./assets/swoosh.png"

export default function App() {
  const [inputValue, setInputValue] = useState('Hi'); 
  return (
    <>
      <Image 
        style={styles.swooshIcon}
        source={swooshImage} />
      <View style={styles.container}>
        <TextInput 
          value={inputValue}
          style={styles.input} 
          onChangeText={(text) => setInputValue(text)}  
        />
        <Text>{inputValue}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#111',
    borderBottomWidth: 1,
    padding: 5,
  },
  swooshIcon: {
    alignSelf: "center",
    marginTop: 20,
    height: 50,
    width: 75,
  }
});
