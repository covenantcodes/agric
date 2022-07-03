import React, { useContext,useEffect,useState } from 'react';
import { View, Image, StyleSheet, Text,  TouchableOpacity} from 'react-native';
import ImageSlider from 'react-native-image-slider';

import Increment from './Increment'
import colors from '../config/colors';
import AppContext from '../bigstore/cstore/compstore';

function DetailsScreen({route}) {

    const images = [
        {

        image: require("../assets/burger.jpeg")
        },

        {
            image: require("../assets/pizza.jpg")
        },

        {
            image: require("../assets/cripsy.jpg")
        }

    ]

    const listing = route.params;


    const  { Addtocartlogic  } = useContext(AppContext)

    const [ mainproduct, setMainproduct  ] = useState({
        ...listing,
        quantity:1
    })

    const [ Imagesz, setImagesz ] = useState([])



    useEffect[()=>{
        imagefunction()
    },[]]


    const incrementCounter= () => setMainproduct({
        ...mainproduct,
        quantity:mainproduct.quantity + 1
    });
    const decrementCounter =  () => setMainproduct({
        ...mainproduct,
        quantity: mainproduct.quantity > 1 ? mainproduct.quantity - 1 :  0
    });


    var specialimg = []

    if (specialimg.length == 0 ) {

        for (let i = 0; i < listing.images.length; i++) {
            
            specialimg.push({uri: listing.images[i].url})

        }
    }else{
        // console.log('smile')
    }


    return (
        <View style={styles.container}>
            {/* <Image  
                source={{uri: listing.images[0].url}}
                style={styles.image}
            />          */}

                    <ImageSlider 
                        loopBothSides
                        autoPlayWithInterval={3000}
                      images={ specialimg}/>
                
                    <View style={styles.descriptionBigContainer}>
                    <View>
                        <View style={styles.titleContainer}>
                                <Text style={styles.title}>{listing.title}</Text>
                                 <Text style={styles.price}>₦{listing.price}</Text>
                    </View>
                    <View style={styles.descriptionTextContainer}>
                                <Text style={styles.descriptionText}>{listing.description}</Text>
                    </View>
                    </View>

                    {/* <View style={styles.ratingContainer}>
                                <Text style={styles.ratingText}>🏅4.7</Text>
                                <Text style={styles.ratingText}>⚖️ 4.5g</Text>
                                <Text  style={styles.ratingText}>🔥 150 Cal</Text>
                    </View> */}

                    <Increment 
                        style={styles.increment}
                        number={mainproduct.quantity}
                        increase={incrementCounter}
                        decrease={decrementCounter}
                    />

                    <View style={styles.addContainer}>
                            <TouchableOpacity style={styles.addBox} 
                                onPress={ () => Addtocartlogic(mainproduct) }
                            >
                                <Text style={styles.addText}> Add To Bag</Text>
                            </TouchableOpacity>
                    </View>
               

                    </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image: {
        width: "100%",
        height: "40%",
    },     

    descriptionBigContainer:{
        flex: 1,
        justifyContent: 'space-between'
    },

    titleContainer:{
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 15,
          width: "100%"
    },

 
    title:{
        // borderWidth: 1,
        width: "80%",
        fontSize: 25,
        fontWeight: 'bold'
    },

    price:{
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.secondary
    },
    descriptionTextContainer:{
        padding: 10
    },
    descriptionText:{
        fontSize: 18,
        textAlign: 'left',
        color: colors.gray
    },

    ratingContainer:{
        // borderWidth: 2,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        padding: 5
    },

    ratingText:{
        fontSize: 20,
        fontWeight: 'bold'
    },

    increment:{
        bottom: 80
    },

    addContainer:{
        padding: 15,
        bottom: 10
    },

    addBox:{
        padding: 15,
        borderRadius: 30,
        backgroundColor: colors.secondary
    },

    addText:{
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    }
    
})


export default DetailsScreen;