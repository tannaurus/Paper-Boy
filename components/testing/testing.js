import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { toTesting } from "../../redux/actions";

export class Testing extends React.Component {
  componentDidMount() {
    this.props.dispatch(toTesting());
    console.log(this.props.state);
    console.log("hello?");
  }
  render() {
    return <Text>Hello!</Text>;
  }
}

const mapStateToProps = (state, actions) => ({
  state: state
});

export default connect(mapStateToProps)(Testing);
