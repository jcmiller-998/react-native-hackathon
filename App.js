import React, { useState, useEffect } from "react";
import AppHeader from "./components/AppHeader";
import { StyleSheet, View, TextInput, Image, Alert } from "react-native";
import swooshImage from "./assets/swoosh.png";
import { AppLoading } from 'expo';
import { Container, Content, Text, Button } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default function App() {

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
    const [inputValue, setInputValue] = useState("Hi");
    const [isLoading, setIsLoading] = useState(true);

    async function getFonts() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
    }
    useEffect(() => {
        getFonts();
        setIsLoading(false)
    }, [])

    return (
        <>
            {
                isLoading ?
                    <AppLoading />
                :
                    <Container>
                        <AppHeader />
                        <Content padder>        
                            <Image style={styles.swooshIcon} source={swooshImage} />
                            <View style={styles.container}>
                                <TextInput
                                    value={inputValue}
                                    style={styles.input}
                                    onChangeText={text => setInputValue(text)}
                                />
                                <Text>{inputValue}</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button
                                    style={styles.button}
                                    onPress={() => setInputValue("Button Text")}
                                >
                                    <Text>
                                        I'm a Button!
                                    </Text>
                                </Button>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button
                                    style={styles.button}
                                    onPress={alert}
                                >
                                    <Text>
                                        Alert!
                                    </Text>
                                </Button>
                            </View>                         
                        </Content>
                    </Container>
            }
        </>
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
        padding: 5
    },
    swooshIcon: {
        alignSelf: "center",
        marginTop: 25,
        height: 50,
        width: 100
    },
    buttonContainer: {
        flex: 1,
        padding: 12
    },
    button: {
        justifyContent: "center"
    }
});
