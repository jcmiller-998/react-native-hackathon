import React from "react";
import { View, Text } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

/*const getUserQuery = gql`
    query GetUserQuery($userName: String!) {
        NikePoolUsers(userName: $userName) {
            name
        }
    }
`

const GetUser = ({ userName }) => {
    return GetUser;
}

export default graphql(getUserQuery, {
    options: () => ({ 
        variables: {
            userName: userName
        }
    })
})(GetUser)*/

const getUserQuery = gql`
    query GetUserQuery($userName: String!) {
        NikePoolUsers(userName: $userName) {
            name
        }
    }
`

const VerifyLogin = (props) => {
    return <Text>{props.userName}</Text>;
}

export default graphql(getUserQuery, {
    options: ({ userName }) => ({ 
        variables: {
            userName: userName
        }
    })
})(VerifyLogin)