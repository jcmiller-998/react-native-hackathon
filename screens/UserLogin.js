import React from 'react';
import { View } from 'react-native';
import NikePoolUsers from "../components/NikePoolUsers";

const UserLogin = ({ navigation }) => (
    <View>
        <NikePoolUsers navigation={navigation} />
    </View>
);

UserLogin.navigationOptions = {
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

export default UserLogin;