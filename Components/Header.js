import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import colors from '../Constants/colors';
import { useFonts } from "expo-font";


const Header = ({ title }) => {
  

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: colors.white,
    fontSize: 22,
    fontFamily: "SyneMono"
    
    
    
  },
});
