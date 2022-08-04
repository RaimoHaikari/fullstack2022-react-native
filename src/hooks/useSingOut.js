/* jotta päästään käsiksi storageen */
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";

const useSingOut = () => {

    /*
     * huom. context:n käyttö useContext hookissa onnistuu vain jos useContext -hookia
     *       käytetään komponentissa, joka perityy Context.Provider komponetista
     */
    const authStorage = useAuthStorage();

    /*
     * Onnistuneen kirjautumisen jälkeen olisi syytä resetoida Apollo Clientin muisti
     * ja hakea tiedot uudelleen (kirjautuneena käyttäjänä)
     */
    const apolloClient = useApolloClient();



    const signOut = () => {

        authStorage.removeAccessToken();
        apolloClient.resetStore();

    }

    return [signOut];
}

export default useSingOut;