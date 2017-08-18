import React from "react";
import { View, Text, StyleSheet } from "react-native";

export class Loading extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#f14c38",
    width: 100,
    height: 100
  },
  text: {
    fontSize: 22
  }
});
