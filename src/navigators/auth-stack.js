import { createStackNavigator, createAppContainer } from 'react-navigation';

import Auth from '../screens/authorization/auth'
import Login from '../screens/authorization/login'

export default createAppContainer(createStackNavigator(
    {
        Auth: { screen: Auth },
        Login: { screen: Login }
    },
    {
        headerMode: 'none'
    }
));