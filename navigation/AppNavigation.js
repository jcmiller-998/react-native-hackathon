import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/Home';
import NavigationScreen from '../screens/Navigation';
import UserLoginScreen from '../screens/UserLogin';
import CreateAccountScreen from '../screens/CreateAccount';

const AppNavigation = createStackNavigator({
    Home: HomeScreen,
    Navigation: NavigationScreen,
    UserLogin: UserLoginScreen, 
    CreateAccount: CreateAccountScreen
})

export default createAppContainer(AppNavigation);