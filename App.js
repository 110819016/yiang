import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const[count,setCount]= useState(0)

    function increase(){
      setCount(count => count+1)
    }

  return (
    <View style={styles.container}>
      <Text>eat how many times? {count}</Text>
      <Button title="Eat how many times?" onPress={increase}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
