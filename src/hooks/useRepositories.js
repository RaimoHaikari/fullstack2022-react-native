/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from '../graphql/queries';

/*
 * HUOM! .env tiedoston backend osoite pitää tarvittaessa korjata oikeaksi
 */
const useRepositories = (variables) => {

    const {data, loading, refetch, fetchMore, ...result} = useQuery(
      GET_REPOSITORIES,
      {
        variables: {
          ...variables
        }
      },
      {fetchPolicy: 'cache-and-network'}
    );

    const fetchRepositories = () => {

      refetch({
        variables
      })

    };

    const handleFetchMore = () => {

      const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

      if(!canFetchMore){
        return;
      }

      fetchMore({
        variables: {
          after: data.repositories.pageInfo.endCursor,
          ...variables
        }
      });
    }

  
    return { 
      repositories: data?.repositories,
      fetchMore: handleFetchMore,
      refetch: fetchRepositories,
      loading,
      ...result
    };
  };
  
  export default useRepositories;