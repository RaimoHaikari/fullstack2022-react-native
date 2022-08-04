/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from '../graphql/queries';

/*
 * HUOM! .env tiedoston backend osoite pitää tarvittaessa korjata oikeaksi
 */
const useRepositories = (settings) => {

    const [repositories, setRepositories] = useState();
    //const [loading, setLoading] = useState(false);


    const {data, loading, error} = useQuery(
      GET_REPOSITORIES, 
      {
        variables: {
          orderBy: settings.orderBy, 
          orderDirection: settings.orderDirection,
          searchKeyword: settings.searchKeyword
        }
      },
      {fetchPolicy: 'cache-and-network'}
    );

    const fetchRepositories = async () => {
      if(data){
        setRepositories(data.repositories)
      }
    };
  
  
    useEffect(() => {

      if(data)
        fetchRepositories()
      
    }, [data]);

  
    return { repositories, loading, refetch: fetchRepositories };
  };
  
  export default useRepositories;