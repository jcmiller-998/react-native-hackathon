import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Container, Content, Text, Button } from "native-base";
import swooshImage from "../assets/swoosh.png";
import nikeTransport from "../assets/nikeTransportation.png"

const Home = ({ navigation }) => {

    const [inputValue, setInputValue] = useState("Enter Your Destination...");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Container>
            <Content padder>
                <View style={styles.subHeader}>
                    <Image style={styles.swooshIcon} source={swooshImage} />
                    {
                        !isLoggedIn ?
                            <Button
                                style = {styles.loginButton}
                                onPress={() => {
                                    navigation.navigate('UserLogin', {
                                        setIsLoggedIn: setIsLoggedIn
                                    })
                                }}
                            >
                                <Text style={styles.loginText}>
                                    {`Login`}
                                </Text>
                            </Button>
                        : <Text></Text>
                    }
                </View>
                <Image style={styles.transportPhoto} source={nikeTransport} />
                <View style={styles.container}>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Select a Destination...',
                        }}
                        style={{
                            placeholder: {
                                borderColor: "black",
                                borderWidth: 0.5,
                                width: "100%",
                                padding: 10,
                                fontFamily: "Helvetica Neue",
                                fontSize: 20,
                                color: 'black',
                                borderColor: "#CCCCCC",
                                textAlign: "center"
                            }
                        }}
                        onValueChange={(value) => setInputValue(value)}
                        items={[
                            { label: "Nike WHQ", value: "whq" },
                            { label: "Downtown Portland", value: "portland" },
                            { label: "Beaverton", value: "beaverton"}
                        ]}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('Navigation', {
                                inputValue: inputValue
                            })
                        }}
                    >
                        <Text style={styles.buttonText}>
                            {`Offer a ride`}
                        </Text>
                    </Button>
                    <Button
                        style={styles.button}
                        // onPress={alert}
                        onPress={() => {
                            navigation.navigate('Navigation')
                        }}
                    >
                        <Text style={styles.buttonText}>
                            {`Request a ride`}
                        </Text>
                    </Button>
                </View>
                <View style={styles.message}> 
                    <Text style={styles.callToAction}>
                        {`JOIN THE MISSION \n RIDE TOGETHER`}
                    </Text>
                    <Text style={styles.hashTag}>
                        {`#MoveToZero`}
                    </Text>
                </View>                  
            </Content>
        </Container>
    );
}

Home.navigationOptions = {
    headerTitle: 'NIKEPOOL',
    headerStyle: {
        backgroundColor: "#F5F5F5"
    },
    headerTitleStyle: {
        fontFamily: "Futura-CondensedExtraBold", 
        fontSize: 28,
        fontWeight: "800",
        letterSpacing: -1
    }
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        margin: 30,
    },
    input: {
        height: 40,
        width: "100%",
        borderColor: "#111",
        borderBottomWidth: 1,
        padding: 5,
        fontFamily: "Helvetica Neue",
        fontSize: 36
    },
    swooshIcon: {
        marginTop: 10,
        marginBottom: 25,
        height: 30,
        width: 60
    },
    transportPhoto: {
        marginTop: 10,
        marginBottom: 25,
        height: 150,
        width: "100%"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    button: {
        justifyContent: "center",
        marginBottom: 24,
        backgroundColor: "#FA5400",
        width: "40%"
    },
    loginButton: {
        marginTop: 10,
        justifyContent: "center",
        marginBottom: 24,
        backgroundColor: "#FA5400",
        width: "18%"
    },
    subHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    callToAction: {
        fontSize: 24,
        fontFamily: "Futura-CondensedExtraBold",
        textAlign: "center",
        letterSpacing: -1,
        fontWeight: "800"
    },
    hashTag: {
        fontSize: 36,
        fontFamily: "Futura-CondensedExtraBold",
        textAlign: "center",
        color: "#FA5400",
        letterSpacing: -1,
        fontWeight: "800"
    },
    buttonText: {
        color: "#111",
        fontFamily: "Helvetica Neue",
        fontSize: 18
    },
    loginText: { 
        color: "#111",
        fontFamily: "Helvetica Neue",
        fontSize: 14
    },
    message: {
        marginTop: 30,
        padding: 30,
        backgroundColor: "#F5F5F5"
    }
});

export default Home;