import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView} from 'react-native';

import Screen from './Screen';
import colors from '../config/colors';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ShopScreen from './ShopScreen';
import AppText from './AppText';
import routes from '../app/navigation/routes'
import useAuth from '../app/auth/useAuth';


const  profileItems = [
    {
        id:1,
        title: "My Listings",
   
    },

    {
        id:2,
        title: "My Notification",
    }
]
function AccountScreen({navigation}) {

        const {user, logOut} = useAuth();


    return (
        <Screen >
            {/* <View style={styles.listContainer}> 
                <ListItem 
                    title="Covenant Ifeoluwa"
                    subTitle="covenantcodes@gmail.com"
                    image={require('../assets/me.jpg')}
                />
            </View> */}
            <View style={styles.profileContainer}>
                    <View style={styles.elevation}>
                                    <Image
                                    source={require("../assets/profile.jpg")}
                                    style={styles.profilePic}
                                    />  
                     </View>

                     <AppText style={styles.profileName}>
                     {user.name}
                     </AppText>
                     <AppText style={styles.profileEmail}>
                          {user.email}
                     </AppText>
                   
            </View>

        
                <ScrollView style={styles.listContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate(routes.ORDER)}>
                            <View style={styles.profileListings}>
                            <View style={{flexDirection: 'row', alignItems:"center"}}>    
                                <FontAwesome5 
                                        name="shopping-bag"
                                        color={colors.secondary}
                                        size={24}
                                        />
                                    <AppText style={styles.profileListingsText}>
                                                My Bag
                                    </AppText>
                            </View>
                                    <MaterialCommunityIcons name="chevron-right" size={24} color={colors.secondary} />
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={() => navigation.navigate(routes.NOTIFICATIONS)}>
                            <View style={styles.profileListings}>
                            <View style={{flexDirection: 'row', alignItems:"center", }}>
                            <MaterialCommunityIcons name="bell" size={24} color={colors.secondary} />
                                    <AppText style={styles.profileListingsText}>
                                                Notifications
                                    </AppText>
                            </View>
                                    <MaterialCommunityIcons name="chevron-right" size={24} color={colors.secondary} />
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate(routes.SHOP_SCREEN)}>
                            <View style={styles.profileListings}>
                            <View style={{flexDirection: 'row', alignItems:"center"}}>
                            <Fontisto name="shopping-store" size={24} color={colors.secondary} />
                                    <AppText style={styles.profileListingsText}>
                                                Become a Vendor/Logistics 
                                    </AppText>
                            </View>
                                    <MaterialCommunityIcons name="chevron-right" size={24} color={colors.secondary} />
                            </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate(routes.LISTING_EDIT)}>
                            <View style={styles.profileListings}>
                            <View style={{flexDirection: 'row', alignItems:"center"}}>
                            <Fontisto name="wallet" size={24} color={colors.secondary} />
                                    <AppText style={styles.profileListingsText}>
                                              My Store
                                </AppText>
                            </View>
                                    <MaterialCommunityIcons name="chevron-right" size={24} color={colors.secondary} />
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate(routes.ORDER_HISTORY)}>
                            <View style={styles.profileListings}>
                            <View style={{flexDirection: 'row', alignItems:"center"}}>
                            <Fontisto name="opencart" size={24} color={colors.secondary} />
                                    <AppText style={styles.profileListingsText}>
                                                My Orders
                                    </AppText>
                            </View>
                                    <MaterialCommunityIcons name="chevron-right" size={24} color={colors.secondary} />
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate(routes.RIDEORDER)}>
                            <View style={styles.profileListings}>
                            <View style={{flexDirection: 'row', alignItems:"center"}}>
                            <MaterialCommunityIcons name="bike-fast" size={24} color={colors.secondary} />
                                    <AppText style={styles.profileListingsText}>
                                                Deliver A Package
                                    </AppText>
                            </View>
                                    <MaterialCommunityIcons name="chevron-right" size={24} color={colors.secondary} />
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => logOut()}
                     >
                            <View style={styles.profileListings}>
                            <View style={{flexDirection: 'row', alignItems:"center"}}>
                            <MaterialCommunityIcons name="exit-run" size={24} color={colors.secondary} />
                                    <AppText style={styles.profileListingsText}>
                                                Logout
                                    </AppText>
                            </View>
                                    <MaterialCommunityIcons name="chevron-right" size={24} color={colors.secondary} />
                            </View>
                    </TouchableOpacity>
                                        {/* 
                                             <FlatList 
                                                data={profileItems}
                                                keyExtractor={profileItem => profileItem.id.toString()}
                                                renderItem={({item }) => 
                                                    <View style={styles.profileListings}>
                                                    <AppText style={styles.profileListingsText}>
                                                                    {profileItems.title}
                                                    </AppText>
                                                  <MaterialCommunityIcons name="chevron-right" size={24} color={colors.secondary} />
                                                    </View>
                                                }
                                                /> */}
                </ScrollView>

            

        </Screen>
    );
}

const styles = StyleSheet.create({

    listContainer:{ 
            backgroundColor: colors.white   
    },

        profileContainer:{
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
        },

        profilePic: {
            width: 200,
            height: 200,
            borderRadius: 100,
            borderColor: colors.secondary,
            borderWidth: 9
        },
        elevation: {
            elevation: 10,
             shadowColor: colors.black,
             width: 200,
             height: 200,
             borderRadius: 100,
          },

          profileName:{
              fontWeight: 'bold',
              fontSize: 25,
              marginTop: 20
          },

          profileEmail:{
              color: colors.gray,
              marginBottom: 50
          },

          profileListings:{
              padding: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'space-between'
          },

          profileListingsText:{
                padding: 5,
                fontWeight: "bold",
                marginLeft: 15
          }
    
})

export default AccountScreen;