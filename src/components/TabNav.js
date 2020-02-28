import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeNav from './HomeNav';
import Profile from '../screens/Profile';

const TabNav = createBottomTabNavigator(
  {
    HomeNav: {
      screen: HomeNav,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({focused}) => (
          <Octicons
            name={'home'}
            size={30}
            color={focused ? 'rgb(29, 161, 242)' : 'rgb(136, 153, 166)'}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({focused}) => (
          <FontAwesome
            name={'user-o'}
            size={30}
            style={{
              color: focused ? 'rgb(29, 161, 242)' : 'rgb(136, 153, 166)',
            }}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'HomeNav',
  },
);

export default createAppContainer(TabNav);
