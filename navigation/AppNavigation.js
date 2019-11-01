import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/Home';
import NavigationScreen from '../screens/Navigation';

const AppNavigation = createStackNavigator({
    Home: HomeScreen,
    Navigation: NavigationScreen
})

export default createAppContainer(AppNavigation);