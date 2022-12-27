import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import {onError} from '@apollo/client/link/error'

const errorLink = onError(({graphqlErrors, networkError}) => {
  if(graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql Error ${message}`);
    });
  }
})

const link = from([
    errorLink,
    new HttpLink({ uri: "https://sxewr.sse.codesandbox.io/" }),
]);

export const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  }); 

  // https://api.spacex.land/graphql/