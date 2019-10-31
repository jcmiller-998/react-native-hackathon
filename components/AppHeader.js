import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { Header, Left, Body, Title, Right } from 'native-base';
import swooshImage from "../assets/swoosh.png";

const AppHeader = () => (
    <View styles={styles.header}>
        <Header>
            <Left style={{ flex: 0 }}/>
            <Body style={{ flex: 1 }}>
                <Title style={{ fontFamily: "Futura-CondensedExtraBold", fontSize: 24 }}>
                    NIKE COMMUTE
                </Title>
            </Body>
            <Right style={{ flex: 0 }}/>
        </Header>
    </View>
);

const styles = StyleSheet.create({
    header: {
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
    }
});

export default AppHeader;

