 /* eslint-disable */
import { useState, useRef  } from "react";
import { FlatList, View, StyleSheet } from "react-native";

import ConfirmDialog from "../SharedComponents/ConfirmDialog";
import useMyReviews from "../../hooks/useMyReviews";
import ReviewsListItem from "../SingleRepository/ReviewsListItem";

import Text from "../Text";

import { useNavigate } from "react-router-native";
import useDeleteReview from '../../hooks/useDeleteReview';

const MyReviews = () => {

    const { reviews, fetchMore } = useMyReviews({
        first: 5
    });

    const [confirmVisible, setConfirmVisible] = useState(false);

    const navigate = useNavigate();

    const [deleteReview] = useDeleteReview();

    const activeReview = useRef(null);


    const styles = StyleSheet.create({
        confirmContainerVisible: {
            flex: 1,
            display: "flex"
        },
        confirmContainerHidden: {
            display: "none"
        },
        confirmContainer: {
            flex: 1
        },
        flatListVisible: {
            display: "flex"
        },
        flatListHidden: {
            display: "none"
        },
        noReviewsText: {
            margin: 10
        }
      });

    /*
     * Tallennetaan muistiin poistettavaksi valitun arvostelun tiedot 
     * ja avataan varmistusdialogi. (Piilotetaan samalla arvostelut)
     */
    const confirmDeletion = (node) => {

        activeReview.current = node;
        setConfirmVisible(true);

    }

    /*
     * Poistetaan arvostelu, mikäli käyttäjä varmisti arvostelun poiston.
     * Palauteaan arvostelut näkyville.
     * Nollataan poistettavaksi valitun muuttujan sisältö
     */
    const confirmListener = async (val) => {

        try {
        
            if(val === true) {

                const data = await deleteReview({
                    id: activeReview.current.id
                });

            } 

            setConfirmVisible(false);
            activeReview.current = null;

        } catch (e) {
            console.log(e);
        }

    }


    /*
     * 
     */
    const reviewedItems = reviews
        ? reviews.edges.map(edge => {

            const node = edge.node;

            return {
                ...node,
                actions: {
                    view: () => navigate(`/repository/${node.repositoryId}`),
                    delete: () => confirmDeletion(node)
                }
            }
        })
        : [];

    const loadMoreItem = () => {
        fetchMore();
    }

    /*
     * renderItem={(item) => <ReviewsListItem data={item}/>}
     *  renderItem={renderItem}
     * 
     * ListHeaderComponent={>}
     * 
     */
    return (
        <View style={{ flex: 1 }}>
            <View style={confirmVisible?styles.confirmContainerVisible:styles.confirmContainerHidden}>
                <ConfirmDialog 
                    closeHandler={confirmListener}
                    isVisible={confirmVisible}
                />
            </View>

            <View style={confirmVisible?styles.flatListHidden:styles.flatListVisible}>
                {
                    reviewedItems.length === 0
                    ? <Text style={styles.noReviewsText} fontWeight="bold">You haven't made any reviews yet.</Text>
                    : <FlatList 
                        data={reviewedItems}
                        renderItem={(item) => <ReviewsListItem data={item}/>}
                        keyExtractor={item => item.repositoryId}
                        onEndReached={loadMoreItem}
                        onEndReachedThreshold={0.5}
                      />
                }
            </View>

        </View>

    );
};

export default MyReviews;