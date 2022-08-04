import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";

/* jotta päästään käsiksi storageen */
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";

const useSingIn = () => {

    /*
     * huom. context:n käyttö useContext hookissa onnistuu vain jos useContext -hookia
     *       käytetään komponentissa, joka perityy Context.Provider komponetista
     * 
     * - AuthStorage luokkaan "päästään käsiksi todella monen mutkan takaa"
     */
    const authStorage = useAuthStorage();

    /*
     * Onnistuneen kirjautumisen jälkeen olisi syytä resetoida Apollo Clientin muisti
     * ja hakea tiedot uudelleen (kirjautuneena käyttäjänä)
     */
    const apolloClient = useApolloClient();

    const [ mutate, result ] = useMutation(
        LOGIN,
        {
            onError: (error) => {
                console.log(error.graphQLErrors[0].message)
            }
        }        
    );

    const signIn = async ({username, password}) => {

        try {

            const { data } =  await mutate({variables: {
                credentials: {
                    username,
                    password
                }
            }});
    
            authStorage.setAccessToken(data.authenticate.accessToken);
            apolloClient.resetStore();
            
            return {
                data: data.authenticate.accessToken
            };

        } catch (e) {

            throw new Error('Loggin failed. Check username and password.');

        }



    }

    return [signIn, result];
}

export default useSingIn;