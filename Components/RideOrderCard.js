import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import Screen from './Screen';
import colors from '../config/colors';

function RideOrderCard ({image, title, description, backgroundColor}) {
return (
        <Screen>
                      <TouchableOpacity  style={{
                          alignItems: "center",
                      }}>
                    <View style={[styles.boxOption, {
                        backgroundColor: backgroundColor,
                        borderRadius: 30,
                    }]}>
                            <View style={styles.boxImageBox}>
                                    <Image 
                                        source={image}
                                        style={styles.boxImage}
                                    />
                            </View>
                            <View style={styles.optionDescription}>
                                        <Text style={styles.optionTitle}>{title}</Text>
                                        <Text style={styles.optionText}>
                                                {description}
                                        </Text>
                            </View>
                    </View>
        </TouchableOpacity>

        </Screen>
   );
 }


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    
    boxOption: {
        height: 200,
        width: "95%",
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    
    boxImageBox:{
        justifyContent: 'center',
        width: "50%",
        height: "100%",
    },
    
    boxImage:{
            width: "120%",
            height: "110%",
    },
    
    optionDescription: {
        width: "40%",
        margin:5
    },
    
    optionTitle:{
        color: colors.white,
        fontWeight: "bold",
        fontSize: 26,
        textAlign: 'left'
    },
    
    optionText:{
        textAlign: 'left',
        color: colors.white,
        marginTop: 15,
        fontSize: 16
    }
    
 })
export default RideOrderCard;