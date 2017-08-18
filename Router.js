import React from "react";
import { Scene, Router } from "react-native-router-flux";

//components
import Stories from "./components/stories";
import Headlines from "./components/headlines";
import { Nav } from "./components/nav";

export class Router extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Stories} title="Stories" initial />
          <Scene key="headlines" component={Headlines} title="Headlines" />
        </Scene>
      </Router>
    );
  }
}
