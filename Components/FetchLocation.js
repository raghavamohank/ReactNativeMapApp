import React from "react";
import MapView from "react-native-maps";
import { Button, View } from "react-native";

class FetchLocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0
    };
  }
  render() {
    console.log("MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAps");
    return (
      <View>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
    );
  }
}
export default FetchLocation;
