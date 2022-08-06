 /* eslint-disable */
import { FlatList, View, Text, StyleSheet } from "react-native";

import useMyReviews from "../../hooks/useMyReviews";
import ReviewsListItem from "../SingleRepository/ReviewsListItem"

const MyReviews = () => {

    const { reviews, fetchMore } = useMyReviews({
        first: 5
    });


    // Get the nodes from the edges array
    const reviewedItems = reviews
        ? reviews.edges.map(edge => {

            const node = edge.node;

            return {
                ...node
            }
        })
        : [];

    const loadMoreItem = () => {
        fetchMore();
    }

    /*
     * renderItem={(item) => <ReviewsListItem data={item}/>}
     *  renderItem={renderItem}
     */
    return (
        <FlatList 
            data={reviewedItems}
            renderItem={(item) => <ReviewsListItem data={item}/>}
            keyExtractor={item => item.repositoryId}
            onEndReached={loadMoreItem}
            onEndReachedThreshold={0.5}
        />
    );
};

export default MyReviews;