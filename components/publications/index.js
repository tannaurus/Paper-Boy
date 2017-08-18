import React from "react";
import { connect } from "react-redux";
import { ScrollView, View } from "react-native";
import { List, ListItem } from "react-native-elements";
import { Actions } from "react-native-router-flux";

//actions
import { fetchPublications, fetchNews } from "../../redux/actions";

//components
import Nav from "../nav";

export class Publications extends React.Component {
  componentDidMount() {
    if (this.props.publications.length === 0) {
      this.props.dispatch(fetchPublications());
    }
  }
  render() {
    let publications;
    if (this.props.publications.length !== 0) {
      publications = this.props.publications.map((publication, index) => {
        return (
          <ListItem
            key={index}
            roundAvatar
            title={publication.name}
            onPress={() => {
              this.props.dispatch(fetchNews(publication.id, publication.name));
              return Actions.viewPublication();
            }}
          />
        );
      });
    }
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <List>
            {publications}
          </List>
        </ScrollView>
        <Nav />
      </View>
    );
  }
}

const mapStateToProps = (state, props) => ({
  publications: state.publications
});

export default connect(mapStateToProps)(Publications);
