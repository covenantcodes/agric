import React, { useState,useEffect, useContext, useRef } from 'react';
import { Text } from 'react-native';
import {View, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import OrderCard from './OrderCard'; 
import colors from '../config/colors';
import Screen from './Screen';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppContext from '../bigstore/cstore/compstore';
import  { Paystack, paystackProps }  from 'react-native-paystack-webview';

// const carts = [
//   {
//     id: 1,
//     title: "Egg Yam",
//     price: 200,
//     image: require("../assets/burger.jpeg"),
//     quantity: 3
//   },

//   {
//     id: 2,
//     title: " Rice",
//     price: 200,
//     image: require("../assets/pizza.jpg"),
//     quantity: 1
//   },

//   {
//     id: 3,
//     title: "Yam",
//     price: 200,
//     image: require("../assets/cripsy.jpg"),
//     quantity: 5
//   },


//   {
//     id: 4,
//     title: "Yam",
//     price: 200,
//     image: require("../assets/cripsy.jpg"),
//     quantity: 5
//   },


//   {
//     id: 5,
//     title: "Yam",
//     price: 200,
//     image: require("../assets/cripsy.jpg"),
//     quantity: 5
//   },


//   {
//     id: 6,
//     title: "Yam",
//     price: 200,
//     image: require("../assets/cripsy.jpg"),
//     quantity: 5
//   },


//   {
//     id: 7,
//     title: "Yam",
//     price: 200,
//     image: require("../assets/cripsy.jpg"),
//     quantity: 5
//   },
// ] 

const Order = (props) => {

  const [ UserCart , setUserCart ] = useState(null)
  const { Usercart,RemoveItemfrmCart,AddtoOrders } = useContext(AppContext)
  const [ Totalprice, setTotalprice ] = useState({
      Subtotal:0,
      Delivery_fee:200,
      Total:0
  })

  const SaveUserCart = ( Usercarti ) => {

      setUserCart(Usercarti)


  }

  const Gettotalprice = (Usercart) => {

    var productarrey = [...Usercart.products]

    var totalprice = 0

    for (let i = 0; i < productarrey.length; i++) {
      let product_total = Number(productarrey[i].price) * Number(productarrey[i].quantity)
      totalprice =  Number(product_total) + totalprice
    }
  
    setTotalprice({
      ...Totalprice,
      Subtotal:totalprice
    })

  } 

  
  const AddtoOrderAfterpaystack = () => {

    var Theorder = {
      id:1,
      Date:"23rd Feb 2022, 09:28PM",
      subTotal: Totalprice.Subtotal,
      Delivery: Totalprice.Delivery_fee,
      total: Totalprice.Subtotal + Totalprice.Delivery_fee,
      Address: "No 18, Venice Street, Off South Africa, Califonia, Apata, Ibadan, Venzuela ",
      Products:[...UserCart.products],
      Status:"Pending",
      show:false
    }
  
    AddtoOrders(Theorder)
  

  }
  


  

  useEffect( () => {

    SaveUserCart(Usercart)
    Gettotalprice(Usercart)

  }, [Usercart] )

  const paystackWebViewRef = useRef(null); 

  return (
    <Screen>
     <Text  style={styles.textHeader}>Order Details</Text>

            { UserCart ? 
            
            <View style={styles.container}>
            <FlatList
            data={UserCart.products}
            showsVerticalScrollIndicator={true}
            keyExtractor={(cart) => cart.id.toString()}
            renderItem={({ item }) => (
              <OrderCard
                title={item.title}
                price={item.price} 
                quantity={item.quantity}
                total_price={ item.quantity * item.price }
                imageUrl={item.images[0].url}
                deleteitem={ () => RemoveItemfrmCart(item.id) }
        />
      )}
    />         
</View>
            
            : <View><Text>ddjdjdjd</Text></View> }

        <View style={styles.orderOthers}>
        <View style={styles.paymentBox}>
        <Text style={styles.orderOtherHead}>
                  <Image 
                        source={require("../assets/location.png")}
                        style={{width: 50, height: 50}}
                    />Delivery Details
                    </Text> 

                  <TouchableOpacity style={styles.orderList}>
                             
              <View style={styles.titleContainer}>
                    <Text style={styles.titleText} numberOfLines={1}> No 23, Bethel Estate Bode-Igbo, Agbofieiti, Ibadan, Oyo,  Canada </Text>
              </View>
                  </TouchableOpacity> 

              </View>

                    <View style={styles.paymentBox}>

                  <Text style={styles.orderOtherHead}>
                  <Image 
                        source={require("../assets/atm.png")}
                        style={{width: 50, height: 50}}
                    />Payment Summary
                    </Text> 

                  

                    <View style={styles.dan}>
                              <Text style={styles.danSub}>SubTotal</Text>         
                              <Text style={styles.danPrice}>₦{ Totalprice.Subtotal }</Text>                           
                    </View>

                    <View style={styles.dan}>
                              <Text style={styles.danSub}>Delivery Fee</Text>         
                              <Text style={styles.danPrice}>₦{Totalprice.Delivery_fee}</Text>                           
                    </View>

                    <View style={styles.dan}>
                              <Text style={styles.danST}>Total</Text>         
                              <Text style={styles.danPrice}>₦{ Totalprice.Subtotal + Totalprice.Delivery_fee }</Text>                           
                    </View>
                    </View>

                    <Paystack
                        paystackKey="pk_test_bc6fa88f1991da0c625709df2b0b94abe4186d24"
                        billingEmail="businessagrico@gmail.com"
                        amount={Totalprice.Subtotal + Totalprice.Delivery_fee}
                        onCancel={(e) => {
                          // handle response here
                        }}
                        onSuccess={(res) => {
                          // handle response here
                          AddtoOrderAfterpaystack()
                        }}
                        ref={paystackWebViewRef}
                      />

                    <View style={styles.addContainer}>
                      <TouchableOpacity style={styles.addBox} 
                     onPress={()=> paystackWebViewRef.current.startTransaction()}
                      >
                          <Text style={styles.addText}>Proceed To Checkout</Text>
                      </TouchableOpacity>
              </View>
         
        </View>
    </Screen>
);

 }


const styles = StyleSheet.create({
container:{
  flex: 1,
  padding: 5
},

textHeader:{
  color: colors.primary,
  fontSize:20,
  fontWeight: "bold",
  textAlign: "center"
}, 

orderOthers:{
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      padding: 4,
      elevation: 2
},

orderOtherHead:{
  color: colors.primary,
  fontSize: 20,
  fontWeight: "bold"
},


image:{
  width: 50,
  height: 50,
  borderRadius: 15,
  alignItems: "center",
  justifyContent: 'center'
},
titleContainer:{
  flex: 1,
  textAlign: 'center',
  justifyContent: 'center',
  marginLeft: 10
},
titleText:{
  fontSize: 18,
  fontWeight:  'bold'
},
orderList:{
    flexDirection: "row"
},
paymentBox:{
  padding: 10,
},

dan:{
      flexDirection: "row",
      padding: 15,
      justifyContent: "space-between"
},

danSub:{
  color: colors.gray,
  fontSize: 20,
  fontWeight: "bold"
},

danPrice:{
    color:colors.black,
     fontSize: 20,
     fontWeight: "bold"
},
danST:{
  color:colors.black,
     fontSize: 22,
     fontWeight: "bold"
},

addContainer:{
  padding: 10,
  bottom: 3
},

addBox:{
  padding: 15,
  borderRadius: 15,
  backgroundColor: colors.secondary
},

addText:{
  color: colors.white,
  fontWeight: 'bold',
  fontSize: 15,
  textAlign: 'center'
}
 })
export default Order;