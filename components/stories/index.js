import React from "react";
import { connect } from "react-redux";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  View,
  StyleSheet
} from "react-native";
import { Card } from "react-native-elements";

//components
import { Nav } from "../nav";

//actions
import { fetchNews, fetchHeadlines, handleRefresh } from "../../redux/actions";

export class Stories extends React.Component {
  componentDidMount() {
    if (this.props.stories.length === 0) {
      this.props.dispatch(fetchNews("the-verge", "The Verge"));
    }
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.publication);
    if (prevProps.refresh !== this.props.refresh && this.props.refresh) {
      this.props.dispatch(
        fetchNews(
          this.props.publication || "cnn",
          this.props.publicationName || "CNN"
        )
      );
      this.props.dispatch(handleRefresh());
    }
  }

  render() {
    const renderedStories = this.props.stories.map((story, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => Linking.openURL(story.url)}
        >
          <Card imageStyle={styles.card} image={{ uri: story.urlToImage }}>
            <Text style={styles.title}>
              {story.title}
            </Text>
            <Text style={styles.desc}>
              {story.description}
            </Text>
            <Text style={styles.publicationName}>
              {this.props.publicationName}
            </Text>
          </Card>
        </TouchableOpacity>
      );
    });

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.contentContainer}>
          {renderedStories}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: 400
  },
  title: {
    fontSize: 22,
    paddingBottom: 4
  },
  desc: {
    fontSize: 18,
    paddingBottom: 4
  },
  publicationName: {
    textAlign: "right",
    fontSize: 15,
    color: "grey"
  },
  contentContainer: {
    // flex: 1,
    // justityContent: "center"
  }
});

const mapStateToProps = (state, actions) => ({
  stories: state.stories,
  refresh: state.refresh,
  publication: state.currentPublication,
  publicationName: state.currentPublicationName,
  state: state
});

export default connect(mapStateToProps)(Stories);
