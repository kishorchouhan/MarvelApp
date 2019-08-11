import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./app/screens/SearchScreen";
import CharacterScreen from "./app/screens/CharacterScreen";
const AppNavigator = createStackNavigator(
  {
    Home: { screen: SearchScreen, navigationOptions: { title: "Marvel" } },
    Character: {
      screen: CharacterScreen,
      navigationOptions: { title: "Marvel" }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
