import React, {Component, useState} from 'react';
import {
  Welcome,
  Login,
  Register,
  FoodList,
  ProductGirdView,
  Settings,
  Profile,
  Chat,
} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images, color, fontSizes, icons, colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View} from 'react-native';
const Tab = createBottomTabNavigator();
const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveBackgroundColor: colors.primary,
  tabBarInactiveBackgroundColor: colors.primary,
  tabBarActiveTintColor: 'white',
  tabBarInactiveTintColor: colors.inactive,
  tabBarIcon: ({focused, color, size}) => {
    let iconCurrent = 'cog';
    if (route.name === 'FoodList') iconCurrent = 'sliders-h';
    else if (route.name === 'ProductionGridView') iconCurrent = 'pizza-slice';
    else if (route.name === 'Profile') iconCurrent = 'users-cog';
    else if (route.name === 'Chat') iconCurrent = 'comment-dots';
    return <Icon name={`${iconCurrent}`} color={color} size={size} />;
  },
  tabBarBackground: () => {
    //che background cho cac thiết bi IOS
    <View style={{backgroundColor: colors.primary, flex: 1}}></View>;
  },
});
const UITab = props => {
  return (
    <Tab.Navigator initialRouteName="FoodList" screenOptions={screenOptions}>
      <Tab.Screen
        name="FoodList"
        component={FoodList}
        options={{
          tabBarLabel: 'Lists',
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
      <Tab.Screen
        name="ProductionGridView"
        component={ProductGirdView}
        options={{
          tabBarLabel: 'Productions',
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            fontSize: fontSizes.h6,
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default UITab;
