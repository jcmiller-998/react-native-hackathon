import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, Alert } from 'react-native';
import { Container, Content, Text, Button } from "native-base";
import AppHeader from "../components/AppHeader";
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
            <AppHeader />
            <Content padder>
                <View style={styles.subHeader}>
                    <Image style={styles.swooshIcon} source={swooshImage} />
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
                            navigation.navigate('Navigation')
                        }}
                    >
                        <Text style={styles.buttonText}>
                            {`Offer a ride`}
                        </Text>
                    </Button>
                    <Button
                        style={styles.button}
                        onPress={alert}
                    >
                        <Text style={styles.buttonText}>
                            {`Request a ride`}
                        </Text>
                    </Button>
                </View>       
                <Text style={styles.callToAction}>
                    {`JOIN THE MISSION \n RIDE TOGETHER`}
                </Text>
                <Text style={styles.hashTag}>
                    {`#GoToZero`}
                </Text>                  
            </Content>
        </Container>
    );
}

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
    subHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    callToAction: {
        marginTop: 50,
        fontSize: 24,
        fontFamily: "Futura-CondensedExtraBold",
        textAlign: "center",
    },
    hashTag: {
        fontSize: 36,
        fontFamily: "Futura-CondensedExtraBold",
        textAlign: "center",
        color: "#FA5400"
    },
    buttonText: {
        color: "#111",
        fontFamily: "Helvetica Neue",
        fontSize: 18
    }
});

export default Home;