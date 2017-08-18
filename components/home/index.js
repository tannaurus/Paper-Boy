import React from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { StyleSheet, Text, View, ScrollView } from "react-native";

//components
import Stories from "../stories";
import Headlines from "../headlines";
import Nav from "../nav";
import { Loading } from "../loading";

export class Home extends React.Component {
  render() {
    console.log(this.props.loading);
    if (this.props.loading) {
      return (
        <View>
          <Loading />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.body}>
          <Text style={styles.headlines}>Headlines</Text>
          <Headlines />
          <Text style={styles.headlines}>Stories</Text>
          <Stories />
        </ScrollView>
        <Nav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#F9F8F8"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  headlines: {
    color: "#FFFFFF",
    fontSize: 40,
    paddingLeft: 8,
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: "#144955"
  }
});

const mapStateToProps = (state, props) => ({
  loading: state.loading
});

export default connect(mapStateToProps)(Home);
