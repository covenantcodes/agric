import React, { useContext, useEffect, useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image,FlatList} from 'react-native';
import OrderHistoryCard from './OrderHistoryCard';
import Screen from './Screen';
import colors from '../config/colors';
import { AntDesign } from '@expo/vector-icons';
import OrderHistoryMegaCard from './OrderHistoryMegaCard';
import AppContext from '../bigstore/cstore/compstore';

function OrderHistory (props) {

    const [ OrderList, setOrderList ] = useState([])

    const {   Myorder  } = useContext(AppContext)

    const showproductsToggle = (orderid) => {

      const orderIndex = OrderList.findIndex( i => {
        return i.id === orderid
      } ) 


      let Order = {...OrderList[orderIndex],show:!OrderList[orderIndex].show}

      let FreshOrderlist = [...OrderList]
      FreshOrderlist.splice(orderIndex,1,Order)

      setOrderList(FreshOrderlist)

      // console.log(orderIndex)

    }


    useEffect(() => {
      setOrderList(Myorder)
    }, [Myorder]);


return (
            <Screen>
                    <Text  style={styles.textHeader}>Order History</Text>
                    <View style={styles.container}>


                        <FlatList
                            data={OrderList}
                            showsHorizontalScrollIndicator={true}
                            keyExtractor={ (order) => order.id }
                            renderItem = {({item}) => (

                                <OrderHistoryMegaCard
                                        id={ item.id }
                                        date={ item.Date }
                                        toggle={() => showproductsToggle(item.id)}
                                        status = {item.Status}
                                        statusColor={item.Status === "Delivered" ? "green" : "orange"}
                                        total={item.total}
                                        subTotal={item.subTotal}
                                        Delivery={item.Delivery}
                                        Address={item.Address}
                                        list={

                                            item.show ? 

                                            <FlatList
                                            data={item.Products}
                                            showsVerticalScrollIndicator={true}
                                            keyExtractor={ (productid) => productid.id }
                                            renderItem={ ({item}) => (
                                                <OrderHistoryCard
                                                    orderName={item.title}
                                                    orderDesc={ item.description }
                                                    orderPrice={ item.price }
                                                    // orderImg={item.images[0]}
                                                    // orderQuantity={item.}
                                                />
                                            ) }

                                    /> : null

                                        }
                                />

                            )  }
                    />
                        
                </View>

            </Screen>

   );
 }


const styles = StyleSheet.create({    
    container: {
        flex: 1, 
        padding: 3
    },

    orderHCContainer:{
        padding: 10,
        borderRadius: 8,
        borderWidth: 0,
        // elevation: 5
    },
    orderHCTitleContainer:{
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    orderHCTitle:{
            fontWeight: "bold",
            fontSize: 16,
            color: colors.primary
    },
    
    orderHCDate:{
    color: colors.gray
    },
    textHeader:{
        color: colors.primary,
        fontSize:25,
        fontWeight: "bold",
        textAlign: "center"
      }, 
    
 })
export default OrderHistory;