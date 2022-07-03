import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import Screen from './Screen';
import Constants from "expo-constants";
import colors from '../config/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import routes from '../app/navigation/routes';

import listingsApi from '../api/listings';
import ShopCard from './ShopCard';



function ListingEditScreen ({navigation}) {
  const getListingsApi= useApi(listingsApi.getListings);


  useEffect(() => {
        getListingsApi.request();
      }, []);

  return (
  <Screen style={styles.container}>
          <View style={styles.coverPhotoBox}>
                    <Image 
                          source={require("../assets/texture.jpg")}
                          style={styles.coverPhoto}
                    />
          </View> 

          <View style={styles.profilePicContainer}>
          <View style={styles.elevation}>
                     <Image
                        source={require("../assets/profile.jpg")}
                        style={styles.profilePic}
                    />  
           </View>
          <View style={styles.shopName}>
              <View style={styles.shopNameVerifiedBox}>
                        <Text style={styles.shopNameText}>McDonalds 
                    
                    </Text>   
                      <MaterialIcons 
                    name="verified"
                      size={21} 
                      color={colors.secondary} 
                      style={styles.verifiedIcon}/>
              </View>
               <Text style={styles.textUserShop}>@mcdonalds</Text>
          </View>
          </View>

                  <View style={styles.shopDescriptionBig}>
                   <Text style={styles.shopDescriptionTitle}>
                              My Description 
                          </Text>
                  <View style={styles.shopDescription}>  
                          <Text style={styles.shopDescriptionText}>
                          McDonald's Corporation is an American-based multinational fast food chain, 
                          founded in 1940 as a restaurant operated by Richard and Maurice McDonald,
                          in San Bernardino, California, United States.  The official website of Macca's® Australia.
                          Whether you want the details of what's in your Big Mac®, 
                          or to find your nearest restaurant, this is the place .
                          </Text>
                  </View>
          </View>


          <View style={styles.shopPostView}> 
          <View style={styles.shopProducts}>
                <Text style={styles.shopDescriptionTitle}>My Products</Text>
             </View>

             <TouchableOpacity style={styles.postBtn} onPress={() => navigation.navigate(routes.POST_SCREEN)}>
                                <Ionicons name="add-circle" size={29} color={colors.secondary} />
              </TouchableOpacity>
                          
           
            </View>

            <FlatList 
                  data={getListingsApi.data}
                  keyExtractor={(listing) => listing.id.toString()}
                  horizontal={false}
                 numColumns={2}
                  renderItem={({item}) => 
                        <ShopCard 
                                title={item.title}
                                description={item.description} 
                                subTitle={ item.price}
                                imageUrl={item.images[0].url}
                                 onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                                 thumbnailUrl={item.images[0].thumbnailUrl}
                        />   
                }
                />

  </Screen>
   );
 }


const styles = StyleSheet.create({
container:{
  flex:1 ,
},
coverPhoto:{
  height: 150,
  width: 390,
  backgroundColor: "#000000",
},

profilePic: {
  width: 180,
  height: 180,
  borderRadius: 100,
  borderColor: colors.secondary,
  borderWidth: 9,
},

elevation: {
  elevation: 10,
   shadowColor: colors.black,
   width: 180,
   height: 180,
   borderRadius: 100,
  marginTop: -100,
},

profilePicContainer:{
  // alignItems: "center",
  // justifyContent: "center",
  flexDirection: "row",
  margin: 10
},

shopName:{
padding: 7,
marginLeft: 40
},

shopNameVerifiedBox:{
  flexDirection: "row",
},

verifiedIcon: {
  marginTop: 3,
  marginLeft: 3
},

shopNameText:{
  textAlign: 'center',
  fontWeight: "bold",
  fontSize: 25,
 color: colors.primary
},

textUserShop:{
  textAlign: "center",
  color: colors.gray
},

shopDescription: {
  borderTopWidth: 2,
  borderBottomWidth: 2,
  borderColor: colors.lightgray,
},

shopDescriptionBig:{
  padding: 10
},

shopPostView:{
 flexDirection: "row",
 justifyContent: 'space-between',
 paddingRight: 10
},

shopDescriptionTitle:{
  fontSize:20,
  fontWeight: "bold",
  color: colors.primary
},

shopDescriptionText:{
  color: colors.black,
  paddingTop: 10,
  fontSize: 14,
  textAlign: "justify",
  
},

shopProducts: {
  paddingLeft: 10
}
 })
export default ListingEditScreen;