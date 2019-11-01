import React, { useState } from "react";
import Home from "./screens/Home";
import AppNavigation from "./navigation/AppNavigation";
import { StyleSheet } from "react-native";
import { AppLoading } from 'expo';
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const getFonts = () => {
        Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
    }

    if (isLoading) {
        return (
            <AppLoading 
                startAsync={getFonts} 
                onFinish={() => setIsLoading(false)}
            />
        )
    }

    return <AppNavigation />
}

export default App;