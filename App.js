import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import FetchLocation from "./Components/FetchLocation";
import Login from "./Components/Login";
import Navigation from "./Components/Navigate";

export default class App extends React.Component {
  getUserLocationHandler = () => {};
  render() {
    console.log("app");
    return <Navigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
