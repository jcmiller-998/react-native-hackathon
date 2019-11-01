import React from 'react';
import ViewOfMap from '../components/ViewOfMap';

const Navigation = () => {
    return (
        <ViewOfMap />
    );
}

Navigation.navigationOptions = {
    headerTitle: 'NIKEPOOL',
    headerStyle: {
        backgroundColor: "#F5F5F5"
    },
    headerTitleStyle: {
        fontFamily: "Futura-CondensedExtraBold", 
        fontSize: 24,
        fontWeight: "800"
    }
};

export default Navigation;