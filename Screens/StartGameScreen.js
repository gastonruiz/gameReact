import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

import Card from "../Components/Card";
import colors from "../Constants/colors";
import Input from "../Components/Input";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const StartGameScreen = ({onStartGame}) => {
  const [value, setValue] = useState("");

  const [confirmed,setConfirmed]= useState(false);

  const [selectNumber, setSelectNumber] = useState('')



  const handleConfirmation = () =>{
    const chooseNumber = parseInt(value)
    if (chooseNumber === NaN || chooseNumber <= 0 || chooseNumber > 99) return

    setConfirmed(true)
    setSelectNumber(chooseNumber)
    setValue('')
  }

  const handleResetInput = () => {
    setValue('');
    setConfirmed(false)
  }


  const handleInput = (text) => {
    setValue(text.replace(/[^0-9]/g, ""));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Card>
          <Text>Elige un numero</Text>
          <Input value={value} onChangeText={handleInput} />
          <View style={styles.buttonContainer}>
            <Pressable style={styles.cleanButton} onPress={handleResetInput}>
              <Text style={{ color: "white" }}>Limpiar</Text>
            </Pressable>
            <Pressable
              style={{
                ...styles.cleanButton,
                ...styles.confirmButton,
              }}
              onPress={handleConfirmation}
            >
              <Text style={{ color: "white" }}>Confirmar</Text>
            </Pressable>
            <Pressable title="Confirmar" />
          </View>
        </Card>
              {confirmed && (
               <Card newStyles={{
                marginTop: 50,
                width: 150,
               }}>
              <Text>Tu numero</Text>
              <Text>{selectNumber}</Text>
              <Button title="Empezar a jugar" onPress={() => onStartGame(selectNumber)}/>
               </Card>
              )}

      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    marginTop: 50,
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cleanButton: {
    backgroundColor: colors.secondary,
    height: 35,
    width: '40%',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    width: '40%',
  },
});
