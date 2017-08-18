import React from "react";
import { connect } from "react-redux";
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  StyleSheet
} from "react-native";
import { Card } from "react-native-elements";

//components
import Nav from "../nav";
import { Loading } from "../loading";

//actions
import { fetchNews, handleRefresh } from "../../redux/actions";

export class viewPublication extends React.Component {
  componentDidUpdate(prevProps) {
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

    if (this.props.loading) {
      return (
        <View>
          <Loading />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.headlines}>
          {this.props.publicationName}
        </Text>
        <ScrollView>
          {renderedStories}
        </ScrollView>
        <Nav />
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
  headlines: {
    color: "#FFFFFF",
    fontSize: 40,
    paddingLeft: 8,
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: "#e74c3c"
  }
});

const mapStateToProps = (state, actions) => ({
  stories: state.stories,
  refresh: state.refresh,
  publication: state.publication,
  publicationName: state.currentPublicationName,
  loading: state.loading
});

export default connect(mapStateToProps)(viewPublication);
