import React, {useState, useEffect}from "react";
import registerNNPushToken, { getPushDataObject } from 'native-notify';
import * as Notifications from 'expo-notifications';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import *  as Permissions from 'expo-permissions';
// icons
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import {FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
// screens
import ListingsScreen from '../../Components/ListingsScreen'
import ListingEditScreen from '../../Components/ListingEditScreen'
import NotificationScreen from "../../Components/NotificationScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import RideOrder from "../../Components/RideOrder";
import Order from "../../Components/Order";
import OfflineNotice from "../../Components/OfflineNotice";
import expoPushTokensApi from "../../api/expoPushTokens";
import navigation from '../navigation/rootNavigation'

import useNotifications from '../hooks/useNotifications';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

  useNotifications();
    return(
    <>
    <OfflineNotice />
     <Tab.Navigator>

         <Tab.Screen 
            name="Home" component={FeedNavigator }
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => 
                <AntDesign name="home" size={size} color={color} />
            }}
         />

<Tab.Screen 
            name="Notifications" component={NotificationScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => 
                <Ionicons name="notifications" size={size} color={color} />
            }}
         />

        <Tab.Screen 
            name="RideOrder"
             component={RideOrder}
            options={({navigation, route}) => ({
                headerShown: false,
                tabBarButton: () => 
                <NewListingButton  onPress={() => navigation.navigate("RideOrder")}/>,
                tabBarIcon: ({color, size}) => (    
                <MaterialCommunityIcons 
                    name="plus-circle"
                    color={color}
                    size={size}
                />)
           })}
         />

        <Tab.Screen 
            name="My Bag" component={Order}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => 
                <FontAwesome5 
                    name="shopping-bag"
                    color={color}
                    size={size}
                />
            }}
         />

        <Tab.Screen 
            name="Profile" component={AccountNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => 
                <MaterialCommunityIcons 
                    name="account"
                    color={color}
                    size={size}
                />
            }}
         />


     </Tab.Navigator>
     </>
); 
};

export default AppNavigator;