import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { Header, Left, Body, Title, Right } from 'native-base';
import swooshImage from "../assets/swoosh.png";

const AppHeader = () => (
    <View styles={styles.header}>
        <Header>
            <Left />
            <Body>
                <Title>
                    Nike Commute
                </Title>
            </Body>
            <Right />
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

