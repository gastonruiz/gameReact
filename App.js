import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import StartGameScreen from './Screens/StartGameScreen'
import GameScreen from "./Screens/GameScreen";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {

  const [loaded] = useFonts({
    SyneMono: require('./Assets/Fonts/SyneMono-Regular.ttf'),
  });
 


  const [userNumber, setUserNumber] = useState();
  
  const handleStartGame = (selectNumber) => {
    setUserNumber(selectNumber)
  } 

  let content = <StartGameScreen onStartGame={handleStartGame}/>

  if (userNumber) {
    content = <GameScreen/>
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title={"adivina el numero"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
