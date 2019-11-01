import React, { useState } from "react";
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import AppNavigation from "./navigation/AppNavigation";
import { AppLoading } from 'expo';
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';

const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://api.graph.cool/simple/v1/ck2frcvhs3q4f0132sedczqm8"
    }),
    cache: new InMemoryCache()
});

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const getFonts = () => {
        Font.loadAsync({
            // 'Nike_Futura': require("@nike/ncss/dist/3.1/dotcom/fonts/3de3fe6a-5eb5-46c0-b860-817dac7636b1.ttf"),
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

    return (
        <ApolloProvider client={client}>
            <AppNavigation />
        </ApolloProvider>
    )
}

export default App;