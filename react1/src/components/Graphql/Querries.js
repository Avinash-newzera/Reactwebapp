import { gql } from "@apollo/client";

export const LoadText = gql`
  query {
    text {
      Text
    }
  }
`;

