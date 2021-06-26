import Text from "./Text"
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
  } from "@apollo/client";
  import { onError } from "@apollo/client/link/error";
  
  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`Graphql error ${message}`);
      });
    }
  });
  const link1 = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:4000/" }),
  ]);
  
  const client1 = new ApolloClient({
    cache: new InMemoryCache(),
    link: link1,
  });
  function Apitext() {
    return (
      <div>
          <ApolloProvider client={client1}>
          <Text/>
          </ApolloProvider>
      </div>
    );
  }
  export default Apitext;