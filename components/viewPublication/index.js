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

import Nav from "../nav";

export class viewPublication extends React.Component {
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
          </Card>
        </TouchableOpacity>
      );
    });

    return (
      <View style={{ flex: 1 }}>
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
  }
});

const mapStateToProps = (state, actions) => ({
  stories: state.stories
});

export default connect(mapStateToProps)(viewPublication);
