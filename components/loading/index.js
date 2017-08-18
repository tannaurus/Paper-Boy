import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export class Loading extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <Image
          style={styles.image}
          source={require("../../images/loading.png")}
        />
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#f14c38",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 32,
    color: "#FFFFFF",
    textAlign: "center"
  },
  image: {
    margin: "auto"
  }
});
