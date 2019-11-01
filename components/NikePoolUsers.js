import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { AppLoading } from 'expo';

const NikePoolUsers = ({ data, loading, navigation }) => {
    
    if (loading) return <AppLoading />;

    return (
        <View>
            <FlatList
                data={data.allNikePoolUsers}
                renderItem={({ item }) => (
                    <Text onPress={() => navigation.navigate("Home")}>
                        {`name: ${item.name} \n userName: ${item.userName}`}
                    </Text>
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