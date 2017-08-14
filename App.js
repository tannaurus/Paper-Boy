import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { API_KEY } from "./secret";

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
        <Card key={index} image={article.urlToImage}>
          <Text>
            {article.title}
          </Text>
        </Card>
      );
    });
    return (
      <ScrollView>
        <Text>Butts stuff hom</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        {cards}
      </ScrollView>
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
