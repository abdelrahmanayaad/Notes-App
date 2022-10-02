



import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Dimensions, Animated, TouchableOpacity, StyleSheet, Easing, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const { width, height } = Dimensions.get("screen")

import { RFValue } from 'react-native-responsive-fontsize';

import { Home, Add_Node, Thrid } from '../screens/index'
const Tab = createBottomTabNavigator();




const MyTabs = ({ }) => {


    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Add'
                shifting="false"


                screenOptions={{
                    showLabel: true,
                    tabBarActiveTintColor: 'rgb(255, 90, 0)',
                    tabBarInactiveTintColor: 'grey',
                    tabBarShowLabel: false,
                    headerShown: false,
                    headerShown: false,
                    tabBarStyle: {
                        height: RFValue(43),
                        position: "absolute",
                        backgroundColor: "#fff",
                        bottom: RFValue(16),
                        right: RFValue(30),
                        left: RFValue(30),
                        borderRadius: RFValue(16), shadowColor: "grey",
                        shadowOpacity: 0.1,
                        shadowRadius: RFValue(20),


                    }
                }} >



                <Tab.Screen name="Homescreen" component={Home}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View>
                                <FontAwesome5 name="home" color={color} size={RFValue(25)} />
                            </View>
                        )
                    }}
                />








                <Tab.Screen name="Add" component={Add_Node}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <View style={{ marginTop: -45 }} >
                                <FontAwesome5 name="plus-circle" color={color} size={RFValue(35)} />
                            </View>
                        )
                    }}
                />




                <Tab.Screen name="Thrid" component={Thrid}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View>
                                <FontAwesome5 name="clock" color={color} size={RFValue(25)} />
                            </View>
                        )
                    }}
                />



            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MyTabs;


