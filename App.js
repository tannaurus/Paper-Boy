import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { setStories } from "./redux/actions";
import { StyleSheet, Text, View, ScrollView } from "react-native";

//components
import Stories from "./components/stories";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ScrollView>
          <Stories />
        </ScrollView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
