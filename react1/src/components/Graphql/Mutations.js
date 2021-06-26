
import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $Name: String!
    $Email: String!
    $Message: String
  ) {
    createUser(
      Name: $Name
      Email: $Email
      Message: $Message
    ) {
      id
    }
  }
`;