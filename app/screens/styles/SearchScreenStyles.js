import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  searchControlContainer: {
    flex: 0.3,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  listContainer: {
    flex: 6,
    flexDirection: "column",
    marginLeft: 5
  },
  searchInput: {
    width: 300,
    height: 40,
    backgroundColor: "gray"
  },
  searchButton: {
    backgroundColor: "red",
    height: 40,
    borderRadius: 2
  },
  buttonLabel: {
    color: "white"
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row"
  }
});
