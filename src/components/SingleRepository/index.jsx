 /* eslint-disable */
import { View, StyleSheet, FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';

import ReviewsListHeader from './ReviewsListHeader';
import ReviewsListItem from './ReviewsListItem';

const styles = StyleSheet.create({ 
    separator: {
        height: 10,
        marginTop: 10
    }
});

const ItemSeparator = () => <View style={styles.separator} />;


const renderList = ({headerItem, onEndReach, reviews}) => {

    // Get the nodes from the edges array
    const reviewsNodes = reviews
        ? reviews.edges.map(edge => {

            const node = edge.node;

            return {
                ...node
            }
        })
        : [];

    return (

        <FlatList 
            data={reviewsNodes}
            keyExtractor={item => item.id}
            renderItem={(item) => <ReviewsListItem data={item}/>}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={() => <ReviewsListHeader item={headerItem} />}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
        
    );
}


/*
 * $repositoryId: ID!, $first: Int, $after: String
 */
const SingleRepository = () => {

    const { id } = useParams();

    const { repository, fetchMore} = useRepository({
        repositoryId: id,
        first: 5
    });

    const onEndReach = () => {
        console.log("in SR onEndReach")
        fetchMore();
    }

    return (
        <>
        {
            typeof repository === 'undefined' 
                ?  null 
                : renderList({
                    reviews: repository.reviews,
                    headerItem: repository,
                    onEndReach: onEndReach
                })
                  
        }
        </>
    );
};

export default SingleRepository;