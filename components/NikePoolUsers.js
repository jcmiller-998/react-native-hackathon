import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const NikePoolUsers = ({ data, loading }) => {
    
    if (loading) return null;

    return (
        <View>
            <FlatList
                data={data.allNikePoolUsers}
                renderItem={({ item }) => (
                    <Text>{`name: ${item.name} \n userName: ${item.userName}`}</Text>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const nikePoolUsersQuery = gql`
    {
        allNikePoolUsers {
            name
            userName
        }
    }
`;

export default graphql(nikePoolUsersQuery)(NikePoolUsers)