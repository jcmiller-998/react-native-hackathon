import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View, TextInput, Image, Alert } from 'react-native';
import {Button} from "native-base";
import swooshImage from "../assets/swoosh.png";


//export default class Login extends Component {
const Login = ({ navigation }) => {


      return (
          <ScrollView style={styles.loginBackground}>
            <Image style = {styles.swooshIcon} source={swooshImage} />
              <Text 
                  style={styles.LoginText}>
                  Jump Into the NikePool
              </Text>
              <TextInput 
              placeholder= 'Username'
              style = {styles.username} 
                 />
              <TextInput placeholder='Password'
              style = {styles.password} />
              <View style={{margin:7}} />
              <Button 
                      style={styles.submitButton}
                        onPress={() => {
                          navigation.navigate('Home')
                      }}
                      >
                      <Text style = {styles.submitText}>
                      {`Submit`}
                       </Text>
                    </Button>
                </ScrollView>
          )
};

const styles = StyleSheet.create({
  swooshIcon: { 
    marginTop: 10,
    marginBottom: 25,
    height: 30,
    width: 60
  },
  LoginText: { 
    fontSize: 40, 
    textAlign: "center", 
    fontFamily: "Futura-CondensedExtraBold",
    color: "#111",
  }, 
  loginBackground: { 
    backgroundColor: "#FA5400",
    padding: 20,
  }, 
  username: {  
    textAlign: "center", 
    fontSize: 24
  }, 
  password: { 
    textAlign: "center", 
    fontSize: 24
  },
  submitButton: { 
    justifyContent: "center",
    marginBottom: 100,
    backgroundColor: "#FA5400",
    width: "100%"
  },
  submitText: { 
    color: "#ffffff", 
    fontSize: 18, 
    fontFamily: "Futura-CondensedExtraBold",
  },
})
  
export default Login;