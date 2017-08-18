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
      this.props.dispatch(fetchNews("the-verge"));
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.refresh !== this.props.refresh && this.props.refresh) {
      this.props.dispatch(fetchNews("cnn"));
      this.props.dispatch(handleRefresh());
    }
  }

  render() {
    console.log("reloaded.", this.props.refresh);
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
  contentContainer: {
    // flex: 1,
    // justityContent: "center"
  }
});

const mapStateToProps = (state, actions) => ({
  stories: state.stories,
  refresh: state.refresh,
  state: state
});

export default connect(mapStateToProps)(Stories);