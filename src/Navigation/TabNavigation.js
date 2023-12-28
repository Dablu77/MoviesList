import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../utils/Colors';
import Home from '../Screens/Home';
import {HomeIcone} from '../utils/Const';
import Yolopay from '../Screens/Yolopay';

import Ginie from '../Screens/Ginie';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
    initialRouteName='ginie'
      screenOptions={{
        showLabel: false,
        headerShown: true,
        tabBarActiveTintColor: COLORS.Chinesepurple,
        // tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          backgroundColor: COLORS.BLACK,
        },
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: 12,
          // color: Colors.Withe
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarColor: COLORS.ORANGE,
          tabBarIcon: ({focused}) => (
            <Image
              source={HomeIcone}
              style={{
                height: focused ? 30 : 20,
                width: focused ? 30 : 20,
                tintColor: focused ? COLORS.Chinesepurple : COLORS.WHITE,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="yolopay"
        component={Yolopay}
        options={{
          headerShown: false,
          tabBarColor: COLORS.ORANGE,
          tabBarIcon: ({focused}) => (
            <Image
              source={HomeIcone}
              style={{
                height: focused ? 30 : 20,
                width: focused ? 30 : 20,
                tintColor: focused ? COLORS.Chinesepurple : COLORS.WHITE,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ginie"
        component={Ginie}
        options={{
          headerShown: false,
          tabBarColor: COLORS.ORANGE,
          tabBarIcon: ({focused}) => (
            <Image
              source={HomeIcone}
              style={{
                height: focused ? 30 : 20,
                width: focused ? 30 : 20,
                tintColor: focused ? COLORS.Chinesepurple : COLORS.WHITE,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
