import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { API_KEY } from "./secret";

import Testing from "./components/testing/testing";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    const url = `https://newsapi.org/v1/articles?source=techcrunch&apiKey=${API_KEY}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
          return;
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          articles: json.articles
        });
      });
  }

  render() {
    const cards = this.state.articles.map((article, index) => {
      let imageUrl;
      if (article.urlToImage) {
        imageUrl = article.urlToImage;
      }
      return (
        <Card key={index} image={{ uri: article.urlToImage }}>
          <Text>
            {article.title}
          </Text>
        </Card>
      );
    });
    return (
      <Provider store={store}>
        <ScrollView>
          <Testing />
          {cards}
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
