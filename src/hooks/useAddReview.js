import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../graphql/mutations";
import { MY_REVIEWS } from "../graphql/queries";

/* jotta päästään käsiksi storageen */

//import useAuthStorage from "./useAuthStorage";
//import { useApolloClient } from "@apollo/client";

const useAddReview = () => {

    /*
     * huom. context:n käyttö useContext hookissa onnistuu vain jos useContext -hookia
     *       käytetään komponentissa, joka perityy Context.Provider komponetista
     * 
     * - AuthStorage luokkaan "päästään käsiksi todella monen mutkan takaa"
     */
   // const authStorage = useAuthStorage();

    /*
     * Onnistuneen kirjautumisen jälkeen olisi syytä resetoida Apollo Clientin muisti
     * ja hakea tiedot uudelleen (kirjautuneena käyttäjänä)
     */
    const [ mutate, result ] = useMutation(
        ADD_REVIEW,
        {
            onError: (error) => {
                console.log(error.graphQLErrors[0].message)
            },
            refetchQueries: [  {query: MY_REVIEWS} ]
        }        
    );

    const addReview = async ({owner, name, rating, review}) => {

        try {

            const { data } =  await mutate({variables: {
                review: {
                    repositoryName: name,
                    ownerName: owner,
                    rating: rating,
                    text: review
                }
            }});
    
            //authStorage.setAccessToken(data.authenticate.accessToken);
           // apolloClient.resetStore();
            
            return {
                data: data.createReview
            };

        } catch (e) {

            throw new Error('Failure in adding a new review. Contact HelpDesk..');

        }



    }

    return [addReview, result];
}

export default useAddReview;