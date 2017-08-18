import React from "react";
import { connect } from "react-redux";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Linking,
  StyleSheet
} from "react-native";
import { Card } from "react-native-elements";

//actions
import { fetchHeadlines } from "../../redux/actions";
export class Headlines extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchHeadlines());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.refresh !== this.props.refresh && this.props.refresh) {
      this.props.dispatch(fetchHeadlines());
    }
  }

  render() {
    let headlines;
    if (this.props.headlines.articles) {
      headlines = this.props.headlines.articles.map((story, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => Linking.openURL(story.url)}
          >
            <Card image={{ uri: story.urlToImage }}>
              <Text>
                {story.title}
              </Text>
            </Card>
          </TouchableOpacity>
        );
      });
    }
    return (
      <ScrollView
        horizontal={true}
        decelerationRate={0}
        snapToInterval={200} //your element width
        snapToAlignment={"center"}
      >
        {headlines}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    width: "50%"
  }
});

const mapStateToProps = (state, props) => ({
  headlines: state.headlines,
  refresh: state.refresh
});

export default connect(mapStateToProps)(Headlines);
