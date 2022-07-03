import React, { useEffect, useState, useContext } from 'react';
import { FlatList, StyleSheet, TextInput, Text,TouchableOpacity, View, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AppContext from '../bigstore/cstore/compstore';


import Card from './Card';
import Screen from './Screen';
import Header from './Header';
import listingsApi from '../api/listings';
import colors from '../config/colors';
import routes from '../app/navigation/routes';
import ActivityIndicator from './ActivityIndicator';
import Button from './AppButton'
import useApi from '../app/hooks/useApi';


function ListingsScreen({navigation}) {
    const getListingsApi= useApi(listingsApi.getListings);

    // const { counter, foolish,family,products  } = useContext(AppContext);
    

    // const getref = () => {
    //     getListingsApi.request(1,2,3);
    // }
    useEffect(() => {
        getListingsApi.request();
      }, []);


        return (
            <>
            <ActivityIndicator  visible={getListingsApi.loading} />
            <Screen >
                

                <View style={styles.elevation}>
                           <Header />
                        <View style={styles.searchBar}>
                            <TextInput 
                             placeholder='Search for anything... '
                             style={styles.searchInput}
                            />
                            
                            <TouchableOpacity
                            style={styles.searchIcon}
                            >
                            <FontAwesome
                             name="search" 
                             size={24}                                                                                                                                                                  
                             color={colors.primary} 
                             />                                                                                                                                                                                     
                            </TouchableOpacity>
                                 </View>
                </View>

                {getListingsApi.error && <View style={{alignItems: "center", justifyContent: "center",   padding: 10}}>
                        <Image 
                            source={require('../assets/wi-fi.gif')}
                            style={{
                                width: 300,
                                height: 300
                            }}
                        />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                        <Text style={{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                            fontSize: 20,
                            fontWeight: "bold",
                            color: colors.primary
                        }}>Couldn't Reach Server</Text>
                        <Button title="Retry"  onPress={getListingsApi.request}/>
                </View>}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

            <FlatList 
                  data={getListingsApi.data}
                  keyExtractor={(listing) => listing.id.toString()}
                  horizontal={false}
                 numColumns={2}
                  renderItem={({item}) => 
                        <Card 
                                title={item.title}
                                description={item.description} 
                                subTitle={ item.price}
                                imageUrl={item.images[0].url}
                                 onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                                 thumbnailUrl={item.images[0].thumbnailUrl}
                        />   
                        
                }
                />

                {/* <Button title={ counter + " " + family  } onPress={foolish} />  */}

            </Screen>
            </>
    );
}


const styles = StyleSheet.create({
    searchBar: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 5,
        bottom: 5,
    },

    elevation: {
        // elevation: 12,
        shadowColor: '#52006A',
        borderWidth: 0,
        backgroundColor: "#fff"
      }, 

    searchInput:{
        padding: 10,
        backgroundColor: colors.lightgray,
        width: "80%",
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },
    searchIcon:{
        padding: 11,
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightgray,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    }
})
export default ListingsScreen;