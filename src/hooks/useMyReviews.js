/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";

import { MY_REVIEWS } from '../graphql/queries';

/*
 * HUOM! .env tiedoston backend osoite pitää tarvittaessa korjata oikeaksi
 */
const useMyReviews = (variables) => {

    const {data, loading, fetchMore, ...result} = useQuery(
      MY_REVIEWS,
      {
        variables: {
          ...variables
        }
      }
    );


    const handleFetchMore = () => {

      const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

      if(!canFetchMore){
        return;
      }

      fetchMore({
        variables: {
          after: data.me.reviews.pageInfo.endCursor,
          ...variables
        }
      });
    }
  
    return { 
      reviews: data?.me.reviews,
      fetchMore: handleFetchMore,
      loading,
      ...result
    };
    
  };
  
  export default useMyReviews;