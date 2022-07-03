import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, TouchableHighlight,} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';

const  OrderCard = (props) => {
    const [quantity, setQuantity] = useState(1); 
    const incrementCounter= () => setQuantity(quantity + 1);
    let decrementCounter = () => setQuantity(quantity - 1);

    if (quantity <= 1 ) {
        decrementCounter = () => setQuantity (1);
    }


return (
    <GestureHandlerRootView>
    {/* <Swipeable renderRightActions={props.renderRightActions }> */}
                <View style={styles.container}>

                <View style={styles.orderBox}>
                        <View style={styles.imageBox}>
                                <Image 
                                         source={{uri:props.imageUrl}}
                                        style={styles.orderImg}
                                />
                        </View>
                        <View style={styles.orderOthers}>
                        
                                                <View style={styles.titlenP}>
                                                        <Text style={styles.orderTitle} numberOfLines={1}>{props.title}</Text>
                                                        <View style={styles.genIdiot}>
                                                        <Text style={styles.orderPrice}>
                                                        ₦{props.price}
                                                        </Text>
                                                                <Text style={styles.orderTQPrice}>
                                                                Total: ₦{props.total_price}
                                                                </Text>
                                                </View>
                                             
                                 </View>

                                <View style={styles.orderRegBox}>
                                        <View style={styles.orderQuatity}>
                                        <TouchableOpacity style={styles.idMentBox} onPress={decrementCounter}>
                                                <Text style={styles.idMent}>-</Text>
                                        </TouchableOpacity>
                                        <Text  style={styles.idMent}>{props.quantity}</Text>
                                        <TouchableOpacity style={styles.idMentBox} onPress={incrementCounter}>
                                                <Text style={styles.idMent}>+</Text>
                                        </TouchableOpacity>
                                        </View>

                                        <TouchableOpacity onPress={ props.deleteitem } style={styles.deleteActionBox}
                                        >
                                                   <MaterialIcons name="delete" size={28} color={colors.white} />
                                        </TouchableOpacity>
                                </View>



                        </View>

                 
               </View>
               {/* <View style={styles.orderBox}>  
                        <View style={styles.orderItemImg}>
                                <Image 
                                        style={styles.orderItemImages}
                                        source={{uri:props.imageUrl}}
                                />
                        </View>
                        <View style={styles.dirty}>
                                        <View style={styles.orderItemInfo}>
                                        <AppText style={styles.orderTitle} numberOfLines={2}>{props.title}</AppText>
                                        <Text style={styles.orderPrice} numberOfLines={3} >{props.subTitle}</Text>
                                                <Text style={styles.orderPrice}>{props.price}</Text>
                                        </View>
                                        <View style={styles.orderItemPQ}>
                                                <View style={styles.incrementContainer}>
                                                        <TouchableOpacity style={styles.incrementBox} onPress={decrementCounter}><Text style={styles.incrementText}>-</Text></TouchableOpacity>
                                                        <TouchableHighlight style={styles.incrementNum}>
                                                        <Text style={styles.incrementNumText}>{ props.quantity }  </Text>
                                                        </TouchableHighlight >   
                                                        <TouchableOpacity style={styles.incrementBox} onPress={incrementCounter}><Text style={styles.incrementText}>+</Text></TouchableOpacity>
                                                </View>
                                        </View>
                        </View>
                        </View> */}
               </View>
      {/* </Swipeable> */}
      </GestureHandlerRootView>
   );
 }


const styles = StyleSheet.create({
    container:{
        alignItems: "center",
         padding: 4,
},


orderBox:{
        width: "95%",
        padding: 10,
        flexDirection: 'row',
        backgroundColor: colors.secondary,
        elevation: 5,
        borderRadius: 15
},

imageBox:{
        width: "30%",
},

orderImg:{
        width: "100%",
        height: 100,
        borderRadius: 10
},

orderOthers:{
        width: "70%",
        marginLeft: 12,
        justifyContent: 'space-around'

},

orderTitle:{
        width: "100%",
        fontSize: 25,
        fontWeight: "bold",
        color: colors.white
},

orderPrice:{
        color: colors.gray,
        fontSize: 18,
        color: colors.white
},

orderRegBox:{
        flexDirection: "row",
        justifyContent: "space-between"
},

orderQuatity:{
        flexDirection:"row",
},

idMent:{
        fontSize: 26,
        padding: 12,
        color: colors.white
},

deleteActionBox:{
        padding: 12
},

genIdiot: {
        flexDirection: "row",
        justifyContent: "space-between"
},

orderTQPrice:{
        color: colors.gray,
        fontSize: 18,
        color: colors.white,
        padding:10,
        fontStyle: 'italic',
}

// orderBox: {
//         top: 10,
//         flexDirection: 'row',
//         width: '100%',
//         padding: 14,
//         borderWidth: 1,
//         borderRadius: 10,
//         backgroundColor: colors.secondary
// },

// dirty:{
//         borderWidth: 1,
//         marginLeft: 15
// },

// orderItemImg:{
//     width: '30%'
// },

// orderItemImages:{
//         height: 100,
//         width: 100,
//         borderRadius: 25
// },


// orderItemInfo:{
//         borderWidth: 1,
//         alignItems: 'center',
//         justifyContent: 'space-evenly',
//          width: '100%'
// },
// orderTitle:{
//                fontWeight: 'bold',
//                 textAlign: 'center',
//                 color: colors.white,
//                 fontSize: 20,
//                 bottom: 13
//         },    

//         orderPrice:{
//                 fontSize: 16,
//                 color: "white",
//                 fontWeight: "bold"
//         },
// orderItemPQ:{
//         alignItems: 'flex-end',
//         justifyContent: 'space-evenly',
//          width: '30%'
// },

// Increment:{
//         borderWidth: 4
// },

// // *******************INCREMENT*****************************
      
// incrementContainer:{
// alignItems: 'center',
// justifyContent: 'center',
// flexDirection: 'row',
// top: 6
// },

// incrementCon:{
// backgroundColor: colors.lightgray,
// flexDirection: 'row',
// alignItems: 'center',
// justifyContent: 'center',
// borderRadius: 20,
// elevation: 2
// },

// incrementText:{
// fontSize: 22,
// color: colors.white,

// },

// incrementBox:{
// alignItems: 'center',
// justifyContent: 'center',
// width: 15,
// height: 30,
// borderRadius: 3,
// },

// incrementNumText:{
// fontSize: 20,
// margin: 15,
// color: colors.white,
// fontWeight: 'bold'
// },

// incrementNum:{
// alignItems: 'center',
// justifyContent: 'center',
// width: 50,
// height: 50,
// borderRadius: 3,
// },
 })
export default OrderCard;