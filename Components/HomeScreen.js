import React, { Component } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import MapView from "react-native-maps";

export default class HomeScreen extends Component {
  locate = () => {
    this.props.navigation.navigate("FetchLocation");
  };
  render() {
    const { navigation } = this.props;
    const username = navigation.getParam("username");
    console.log("Home", username);
    return (
      <View style={styles.container}>
        <Text>Hello {username}</Text>
        <Button title={"Locate"} style={styles.input} onPress={this.locate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: 100,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10
  }
});
