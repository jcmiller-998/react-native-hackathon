import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const NewRideOffered = ({ onSubmit }) => {
    const [ride, setRide] = useState('');

    const submitForm = () => {
        onSubmit({
            ride: ride.value
        });
    };
    
    return (
        <View>
            <TextInput>
                onChangeText={ride => setRide(ride)}
                value={ride}
            </TextInput>
            <Button title="submit" onPress={submitForm} />
        </View>
    )
}

const newUser = gql`
    mutation newUser($name: String!, $userName: String!) {
        createNikePoolUser(name: $name, userName: $userName) {
            id
        }
    }
`    

export default graphql(NewRideOffered, {
    name: 'new'
})(newUser)