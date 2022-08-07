 /* eslint-disable */
import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";
import { MY_REVIEWS } from "../graphql/queries";

const useDeleteReview = () => {

    /*
update: (cache, response) => {
      cache.updateQuery({ query: ALL_PERSONS }, ({ allPersons }) => {
        return {
          allPersons: allPersons.concat(response.data.addPerson),
        }
      })
    },
    */
    const [ mutate, result ] = useMutation(
        DELETE_REVIEW,
        {
            onError: (error) => {
                console.log(error.graphQLErrors[0].message)
            },
            refetchQueries: [  {query: MY_REVIEWS} ],
        },
      
    );

    const deleteReview = async ({id}) => {

        try {

            const {data} = await mutate({
                variables: {
                    deleteReviewId: id
                }
            })

            return data

        } catch (e) {

            throw new Error('Failure in adding a new review. Contact HelpDesk..');

        }
    }


    return [deleteReview, result];
}

export default useDeleteReview;