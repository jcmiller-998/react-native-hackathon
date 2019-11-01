import React from "react";
import { View, Text } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const getUserQuery = gql`
    query GetUserQuery($id: ID!, $name: String!, $userName: String!) {
        Post(id: $id, name: $name, userName: $userName) {
            id

        }
    }
`

const PostUser = ({ PostUser }) => {
    return <Text>{id}</Text>
}

export default graphql(postUserQuery, {
    options: () => ({ 
        variables: {
            id: PostUser.id
        }
    })
})(PostUser)