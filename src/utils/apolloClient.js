import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

import { relayStylePagination } from '@apollo/client/utilities'


const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  // http://192.168.34.215:5000/api/repositories
  // uri: 'http://192.168.21.215:4000/graphql',
  uri: Constants.manifest.extra.apolloUri,
});

/*
 * Kerrotaan Apollo Clientiellä kuinka palvelimelta hauetut uudet repositoryt
 * liitetään välimuistissa jo olevaan sisältöön
 * 
  typePolicies: {
    RepositoriesQuery: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
    SingleRepositoryQuery: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
    myReviewsQuery: {
      fields: {
        reviews: relayStylePagination(),
      },
    }
  },

  This query returns a User type, which has a field reviews
 */
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
    Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
    User: {
      fields: {
        reviews: relayStylePagination(),
      },
    }
  },
});

const createApolloClient = (authStorage) => {

  /*
   * setContext -funktion avulla saadaan kirjautumisesta kertovat header
   * liitettyä automaattisesti Apollo Clientin tekemiin kyselyihin
   * 
   * authorization: accessToken ? `Bearer ${accessToken}` :'',
   */
  const authLink = setContext(async (_, { headers }) => {

    try {

      const accessToken = await authStorage.getAccessToken();
      
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` :'',
        },
      };

    } catch (e) {

      //console.log(e);

      return {
        headers,
      }
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: cache,
  });
};

export default createApolloClient;