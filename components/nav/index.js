import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { Actions } from "react-native-router-flux";

//actions
import { handleRefresh } from "../../redux/actions";

export class Nav extends React.Component {
  render() {
    return (
      <View style={styles.nav}>
        <Icon
          containerStyle={styles.icon}
          raised={true}
          color="grey"
          size={24}
          name="newspaper-o"
          type="font-awesome"
          onPress={() => Actions.publications()}
        />
        <Icon
          containerStyle={styles.icon}
          color="grey"
          raised={true}
          size={24}
          name="home"
          type="font-awesome"
          onPress={() => Actions.home()}
        />
        <Icon
          containerStyle={styles.icon}
          raised={true}
          color="grey"
          size={24}
          name="refresh"
          type="font-awesome"
          onPress={() => this.props.dispatch(handleRefresh())}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    height: 66,
    borderTopWidth: 5,
    borderTopColor: "grey",
    backgroundColor: "#6C8EAD",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  icon: {
    margin: "auto"
  }
});

export default connect()(Nav);
