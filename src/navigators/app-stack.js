import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import Home from '../screens/app/home';
import Sidemenu from '../components/side-menu';

const HomeStack = createAppContainer(createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home',
    }
));

export default createAppContainer(createDrawerNavigator({
    Home: HomeStack
}, {
        contentComponent: ({
            navigation
        }) => <Sidemenu navigation={navigation} />,
        drawerWidth: 250,
        // drawerBackgroundColor: 'rgba(255,255,255,0)',
        drawerPosition: 'left',
        headerMode: 'none',
        // drawerLockMode: 'locked-open',
    }
));