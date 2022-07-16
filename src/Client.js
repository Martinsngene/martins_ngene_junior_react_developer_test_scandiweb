import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({ uri: "http://localhost:4000/" });

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

const query = gql`
{
    
}
`;

client.query(query);

export default client;
