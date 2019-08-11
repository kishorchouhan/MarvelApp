import { React } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";

import styles from "./styles/SearchScreenStyles";

export default class SearchScreen extends React.Component {
  constructor() {
    super();
    this.state = { date: [], searchText: "" };
    this.navigateToCharacterScreen = this.navigateToCharacterScreen.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.navigateToCharacterScreen = this.navigateToCharacterScreen.bind(this);
  }
  onSearch() {
    const baseUrl = "https://gateway.marvel.com:443/v1/public";
    const endPoint = "characters?";
    const apikey = "6c3e2173a8f3e5adb795172ad8dd3ef2";
    const hash = "4629485a6de69f01f4046b53b33a1386";
    const ts = "1";
    const nameStartWith = this.state.searchText;
    fetch(
      `${baseUrl}${endPoint}apikey=${apikey}&hash=${hash}&ts=${ts}&nameStartsWith=${nameStartsWith}`
    )
      .then(response => response.Json())
      .then(responseJson => {
        const parsedData = this.getParsedData(responseJson);
        this.setState({ data: parsedData });
      });
  }

  getParsedData(apiData) {
    return apiData.data.results.map(item => {
      return {
        name: item.name,
        thumbnailUrl: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        description: item.description
      };
    });
  }

  navigateToCharacterScreen(item) {
    this.props.navigation.navigate("Character", item);
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => this.navigateToCharacterScreen(item)}>
        <View style={styles.listItemContainer}>
          <Image
            source={{ uri: item.thumbnailUrl }}
            style={{ height: 50, width: 50 }}
          />
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.searchControlContainer}>
          <TextInput
            style={styles.searchInput}
            onChangeText={text => this.setState({ searchText: text })}
          />
          <TouchableOpacity style={styles.searchButton} onPress={this.onSearch}>
            <Text style={styles.buttonLabel}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={this.state.data}
            // renderItem={({ item }) => this.renderItem({ item })}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}
