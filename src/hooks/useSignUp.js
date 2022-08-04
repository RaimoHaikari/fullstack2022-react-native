import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations";


const useSingUp = () => {

    const [ mutate, result ] = useMutation(
        SIGN_UP,
        {
            onError: (error) => {
                console.log(error.graphQLErrors[0].message)
            }
        }        
    );

    /*
     *
     */
    const signUp = async ({username, password}) => {

        try {

            const { data } =  await mutate({variables: {
                user: {
                    username,
                    password
                }
            }});
            
            return {
                data: data
            };

        } catch (e) {
            throw new Error('SingUp failed. Contact helpdesk.');
        }



    }

    return [signUp, result];
}

export default useSingUp;