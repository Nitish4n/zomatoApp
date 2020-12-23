import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import HomeScreen from '../screens/HomeScreen';
import RestaurantsScreen from '../screens/RestaurantsScreen';
import OrderScreen from '../screens/OrderScreen';


const NavigationStack = createStackNavigator({
    Home: HomeScreen,
    Restaurants: RestaurantsScreen,
    Order: OrderScreen,
})

export default createAppContainer(NavigationStack);