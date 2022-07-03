import React, { useEffect, useState } from 'react';
import { Text, Button, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import * as Yup from "yup";
import * as Location from 'expo-location'
import listingsApi from '../api/listings'
import colors from '../config/colors';
import Constants from "expo-constants";


import {
  AppForm as Form,
  AppFormField as FormField,
  FormPicker as Picker,
  SubmitButton,
} from "./forms/formIndex"
import CategoryPickerItem from './CategoryPickerItem';
import FormImagePicker from './forms/FormImagePicker';
import useLocation from '../app/hooks/useLocation';
import Screen from './Screen';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(100000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image")  
  });

const categories = [
    {
      label: "Logistics",
       value: 1,
        backgroundColor: 'red',
         icon: 'food-fork-drink' 
        },
    {
      label: "Resturant ", 
      value: 2, 
       backgroundColor: 'green', 
       icon: 'food-variant'
      },

      {
        label: "Store ", 
        value: 3, 
         backgroundColor: 'blue', 
         icon: 'storefront'
        },

        {
          label: "Farm ", 
          value: 4, 
           backgroundColor: 'purple', 
           icon: 'store'
          }
  ]

function ListingEditScreen(props) {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState (false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, {resetForm}) => {
      setProgress(0);
      setUploadVisible(true)
    const result = await listingsApi.addListing(
      {...listing, location}, 
        progress => setProgress(progress));

     if (!result.ok)
    { 
      setUploadVisible(false);
       return   alert('Cant post your food at the moment, Please Try Again');
      }

      resetForm();
      // alert("Your Food has been Uploaded")
  } 

    return (
      <KeyboardAvoidingView style={styles.container}>
        <UploadScreen  onDone={() => setUploadVisible(false)}
        progress={progress} 
        visible={uploadVisible}/>
        <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: []
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema} 
      >

      <Text style={styles.textHeader}>Register As a Shop or Logistics Company</Text >
      
        <FormImagePicker
          name="images"
        />

        <FormField maxLength={255} name="title" placeholder="Shop Name" />

  

        {/* <FormField
          keyboardType="numeric"
          maxLength={12}
          name="price"
          placeholder="Price"
          width={120}
        /> */}

        <Picker 
        // style={{justify}}
        items={categories} 
        name="category"
        numberOfColumns={3} 
        PickerItemComponent={CategoryPickerItem}
         placeholder="Category" 
         width="50%"
         />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Shop Description"
        />
      <SubmitButton title="Sign Up" />
      </Form>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
      container: {
        padding: 10,
        paddingTop: Constants.statusBarHeight,
        flex: 1,
      },

      textHeader:{
        color: colors.primary,
        fontSize:20,
        fontWeight: "bold",
        textAlign: "center"
    }
})
export default ListingEditScreen;