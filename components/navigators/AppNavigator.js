import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import List from '../List';
import React from 'react';
import Search from '../Search';
import Map from '../Map';
import Notification from '../Notification';
import Account from '../Account';
import TabMenu from '../menu/TabMenu';

import colors from '../../resources/colors';

const HomeStack = createStackNavigator({
    Home: List,

});

const SearchStack = createStackNavigator({
    Search,

});

const MapStack = createStackNavigator({
    Map,

}, {
    headerMode: 'none'
});

const NotificationStack = createStackNavigator({
    Notification,

});

const AccountStack = createStackNavigator({
    Account,

});

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Search: SearchStack,
        Map: MapStack,
        Notification: NotificationStack,
        Account: AccountStack,

    },
    {
        initialRouteName: 'Map',
        tabBarPosition: 'bottom',

        tabBarOptions: {
            showIcon: true,
            activeTintColor: colors.main.primary,
            inactiveTintColor: 'gray',
        },

        tabBarComponent: props => <TabMenu {...props} />




    },
);
TabNavigator.navigationOptions = {
    header: null,
};

const AppNavigator = createStackNavigator({
    Main: TabNavigator,

}, {
    initialRouteName: 'Main',

});

AppNavigator.navigationOptions = {
    headerBackTitle: null,

};



export default AppNavigator;

