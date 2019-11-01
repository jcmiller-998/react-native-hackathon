import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/Home';
import NavigationScreen from '../screens/Navigation';
import UserLoginScreen from '../screens/UserLogin';

const AppNavigation = createStackNavigator({
    Home: HomeScreen,
    Navigation: NavigationScreen,
    UserLogin: UserLoginScreen
})

export default createAppContainer(AppNavigation);