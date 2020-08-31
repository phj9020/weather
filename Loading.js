import React from "react";
import { StyleSheet, Text, View } from "react-native";

// View is like div
export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the Weather...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     // flex: 1 is take all the space available
      flex: 1,
      justifyContent: "flex-end",
      paddingHorizontal:30,
      // paddingHorizontal only exist in react : left right
      paddingVertical: 100,
      backgroundColor : "#FDF6AA"
  },
  text : {
      color: "#2c2c2c",
      fontSize: 30,
  }
});
