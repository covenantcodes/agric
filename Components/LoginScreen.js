import React, {  useState } from 'react';
import { Button, Image, StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import routes from '../app/navigation/routes'
import Screen from './Screen';
import * as Yup from "yup";
import authApi from '../api/auth';


import {ErrorMessage, AppForm, AppFormField, SubmitButton} from "./forms/formIndex"
import AppButton from './AppButton';
import useAuth from '../app/auth/useAuth';
import auth from '../api/auth';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen({navigation}) {
        const auth = useAuth();
        const [loginFailed, setloginFailed] = useState(false);

    const handleSubmit = async ({email, password}) => {
      const result = await  authApi.login(email, password);
            if (!result.ok) return setloginFailed(true);
            setloginFailed(false);
            auth.logIn(result.data);
    }

    return (
        
        
            <Screen style={styles.container}>

                <Image 
                    style={styles.logo}
                    source={require("../assets/agrico.png")}
                />

                 <AppForm 
                    initialValues={{ email: "",  password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                    >
                                <ErrorMessage error="Invalid email or password" visible={loginFailed}/>
                                <AppFormField 
                                    icon="email"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder= "Email"
                                    keyboardType="email-address"
                                    name="email"
                                    textContentType="emailAddress"
                                />

                                <AppFormField 
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        icon="lock"
                                        name="password"
                                        placeholder="Password"
                                        secureTextEntry
                                        textContentType="password"
                                /> 

                                    <SubmitButton 
                                        title="Login"
                                    />
                                 
                        </AppForm>

                        <View style={styles.createPrompt}>
                        <Text>Do not have an account?  </Text>
                        <Text 
                            onPress={() => navigation.navigate(routes.REGISTER)}
                            style={{
                                fontWeight: "bold",
                                fontSize: 17
                            }}
                        >Create One</Text>
                        </View>

                </Screen>
    );
}
const styles = StyleSheet.create({

    logo:{
        width: 100,
        height: 100,
        marginTop: 70,
        marginBottom: 20,
        alignSelf: 'center'
    }, 

    container:{
        padding: 10
    },

    createPrompt:{
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    }
})

export default LoginScreen;