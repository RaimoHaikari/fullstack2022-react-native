/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from '../graphql/queries';

/*
 * HUOM! .env tiedoston backend osoite pitää tarvittaessa korjata oikeaksi
 */
const useRepository = (variables) => {


    const { data, loading, fetchMore, ...result } = useQuery(
        GET_REPOSITORY,
        {
            variables: {
              ...variables
            }
        },
        {fetchPolicy: 'cache-and-network'}
    );

    /*
     *
     */
    const handleFetchMore = () => {

      const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

      if(!canFetchMore){
        return;
      }

      fetchMore({
        variables: {
          after: data.repository.reviews.pageInfo.endCursor,
          ...variables
        }
      });
    }

  
    return { 
      repository: data?.repository,
      fetchMore: handleFetchMore,
      loading,
      ...result
    };
  };
  
  export default useRepository;