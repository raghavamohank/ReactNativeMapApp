import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./HomeScreen";
import Login from "./Login";
import FetchLocation from "./FetchLocation";

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: Login,
    FetchLocation: FetchLocation
    // Profile: { screen: Login }
    //Profile: { screen: ProfileScreen }
  },
  {
    initialRouteName: "Login"
  }
);

const Navigation = createAppContainer(MainNavigator);

export default Navigation;
