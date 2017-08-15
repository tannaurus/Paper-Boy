import React from "react";
import { connect } from "react-redux";
import { Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";

//actions
import { fetchNews } from "../../redux/actions";

export class Stories extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNews("cnn"));
  }

  render() {
    console.log(this.props.stories);
    const renderedStories = this.props.stories.map((story, index) => {
      return (
        <Card key={index} image={{ uri: story.urlToImage }}>
          <Text>
            {story.title}
          </Text>
        </Card>
      );
    });

    return (
      <ScrollView>
        {renderedStories}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, actions) => ({
  stories: state.stories,
  state: state
});

export default connect(mapStateToProps)(Stories);
