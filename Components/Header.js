import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity,} from 'react-native';
import colors from '../config/colors';
import Screen from './Screen';
import { FontAwesome } from '@expo/vector-icons';
import AccountScreen from './AccountScreen';
import { useNavigation } from '@react-navigation/native';



function Header (props) {
    const navigation = useNavigation();

return (
                <View style={styles.container}>
                    <Text  style={styles.textHeader}>Agrico</Text>
                </View>
   );
 }


const styles = StyleSheet.create({
container:{
        padding: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    textHeader:{
        color: colors.primary,
        fontSize:25,
        fontWeight: "bold"
    }
 })
export default Header;