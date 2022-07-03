import React from 'react';
import { TextInput, View , StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

import colors from '../config/colors';
import defaultStyles from "../config/styles"

function AppTextInput({icon, width, ...otherProps}) {
    return (
        <View style={[styles.container, {width }]}>
                {icon && <MaterialCommunityIcons 
                    name={icon}
                    size={20}
                    color={colors.primary}
                    style={styles.icon}
                />}

                    <TextInput 
                    placeholder={defaultStyles.colors.gray}
                        style={defaultStyles.text   }
                        {...otherProps}
                    /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.lightgray,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems:  'center'
    },
    icon:{
        marginRight: 10
    }
})

export default AppTextInput;