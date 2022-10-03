import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Easing,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const {width, height} = Dimensions.get('screen');

import {RFValue} from 'react-native-responsive-fontsize';

import {AddNoteScreen, Thrid, HomeScreen} from '../screens/index';
const Tab = createBottomTabNavigator();

const MyTabs = ({}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Homescreen"
        shifting="false"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          showLabel: true,
          tabBarActiveTintColor: 'rgb(255, 90, 0)',
          tabBarInactiveTintColor: 'grey',
          tabBarShowLabel: false,
          headerShown: false,
          headerShown: false,
          tabBarStyle: {
            height: RFValue(43),
            position: 'absolute',
            backgroundColor: '#fff',
            bottom: RFValue(16),
            right: RFValue(30),
            left: RFValue(30),
            borderRadius: RFValue(12),
            shadowColor: '#F0EFED',
            shadowOpacity: 0.1,
            shadowRadius: RFValue(5),
          },
        }}>
        <Tab.Screen
          name="Homescreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <View
                  style={{
                    padding: RFValue(5),
                    backgroundColor: 'rgb(255,90,0)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: RFValue(-45),
                    borderRadius: RFValue(50),
                  }}>
                  <FontAwesome5 name="home" color={'#fff'} size={RFValue(25)} />
                </View>
              ) : (
                <View>
                  <FontAwesome5 name="home" color={color} size={RFValue(25)} />
                </View>
              ),
          }}
        />

        <Tab.Screen
          name="Add"
          component={AddNoteScreen}
          options={{
            tabBarIcon: ({color, focused}) => (
              <View style={{marginTop: focused ? -45 : 0}}>
                <FontAwesome5
                  name="plus-circle"
                  color={color}
                  size={focused ? RFValue(35) : RFValue(25)}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Thrid"
          component={Thrid}
          options={{
            tabBarIcon: ({color, focused}) =>
              focused ? (
                <View
                  style={{
                    padding: RFValue(5),
                    backgroundColor: 'rgb(255,90,0)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: RFValue(-45),
                    borderRadius: RFValue(50),
                  }}>
                  <FontAwesome5
                    name="clock"
                    color={'#fff'}
                    size={RFValue(25)}
                  />
                </View>
              ) : (
                <View>
                  <FontAwesome5 name="clock" color={color} size={RFValue(25)} />
                </View>
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyTabs;
