import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { setStories } from "./redux/actions";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Router, Scene } from "react-native-router-flux";

//components
import Stories from "./components/stories";
import Home from "./components/home";
import Headlines from "./components/headlines";
import Nav from "./components/nav";
import Publications from "./components/publications";
import viewPublication from "./components/viewPublication";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene
              key="publications"
              title="Publications"
              component={Publications}
            />
            <Scene key="viewPublication" component={viewPublication} />
            <Scene key="home" component={Home} title="Home" initial />
            <Scene key="headlines" component={Headlines} title="Headlines" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
