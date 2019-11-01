import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, Alert } from 'react-native';
import { Container, Content, Text, Button } from "native-base";
import swooshImage from "../assets/swoosh.png";
import nikeTransport from "../assets/nikeTransportation.png"

const Home = ({ navigation }) => {

    const [inputValue, setInputValue] = useState("Enter Your Location...");

    const alert = () => {
        Alert.alert(
            'ALERT!!!',
            'This alert does nothing',
            [
                {
                    text: 'OK',
                    onPress: () => console.log('user hit ok'),
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('user hit cancel'),
                }
            ]
        )
    }

    return (
        <Container>
            <Content padder>
                <View style={styles.subHeader}>
                    <Image style={styles.swooshIcon} source={swooshImage} />
                    <Button
                        style = {styles.loginButton}
                        onPress={() => {
                            navigation.navigate('UserLogin' 
                            )
                        }}
                        >
                        <Text style={styles.loginText}>
                            {`Login`}
                        </Text>
                    </Button>

                </View>
                <Image style={styles.transportPhoto} source={nikeTransport} />
                <View style={styles.container}>
                    <TextInput
                        value={inputValue}
                        style={styles.input}
                        onChangeText={text => setInputValue(text)}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    {/* <Button
                        style={styles.button}
                        onPress={() => setInputValue("Button Text")}
                    >
                        <Text style={styles.buttonText}>
                            {`Offer a ride`}
                        </Text>
                    </Button> */}
                    <Button
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('Navigation', {
                                id: '123'
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
                            navigation.navigate('UserLogin')
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
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },
    input: {
        height: 40,
        width: "100%",
        borderColor: "#111",
        borderBottomWidth: 1,
        padding: 5,
        fontFamily: "Helvetica Neue",
        fontSize: 18
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