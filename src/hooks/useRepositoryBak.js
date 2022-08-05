/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from '../graphql/queries';

/*
 * HUOM! .env tiedoston backend osoite pitää tarvittaessa korjata oikeaksi
 */
const useRepository = (id) => {

    const [repository, setRepository] = useState();

    const {data, loading, error} = useQuery(
        GET_REPOSITORY,
        {
            variables: {
                repositoryId: id,
                first: 3,
                after: ""
            }
        },
        {fetchPolicy: 'cache-and-network'}
    );

    const fetchRepositories = async () => {

      if(data){
        setRepository(data.repository)
      }

    };
  
  
    useEffect(() => {

      if(data)
        fetchRepositories()
      
    }, [data]);

  
    return { repository, loading, refetch: fetchRepositories };
  };
  
  export default useRepository;