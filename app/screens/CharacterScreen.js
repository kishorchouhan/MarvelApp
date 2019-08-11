import { Text, View, Image } from "react-native";
import React from "react";

export default class CharacterScreen extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Image
          source={{ uri: this.props.navigation.getParam("thumbnailUrl") }}
          style={{ height: 550, width: 550 }}
        />
        <Text>{this.props.navigation.getParam("name")}</Text>
      </View>
    );
  }
}
