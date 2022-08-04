/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { ME } from '../graphql/queries';

/*
 * HUOM! .env tiedoston backend osoite pitää tarvittaessa korjata oikeaksi
 */
const useLoggedUser = () => {

    const [user, setUser] = useState();
    //const [loading, setLoading] = useState(false);

    const {data, loading, error} = useQuery(ME, 
      {fetchPolicy: 'cache-and-network'}
    );

    const setUserData = async () => {

      if(data){
        setUser(data.me);
      } 

    };
  
  
    useEffect(() => {

      setUserData(data)
      
    }, [data]);

  
    return { user, loading };
  };
  
  export default useLoggedUser;