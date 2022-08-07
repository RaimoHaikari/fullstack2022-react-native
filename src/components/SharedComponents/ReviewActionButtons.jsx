 /* eslint-disable */
import {  Pressable, View, StyleSheet} from 'react-native';

import Text from '../Text';

import theme from "../../theme";

const styles = StyleSheet.create({
    actionButtonsContainer: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'flex-start',
        padding: 5,
    },
    viewRepositoryBtn: {
      margin: 5,
      backgroundColor: theme.colors.loginBtnBG,
      padding: 10,
      borderRadius: 5,
      flex: 1
    },
    deleteReviewBtn: {
      margin: 5,
      backgroundColor: theme.colors.deletetnBG,
      padding: 10,
      borderRadius: 5,
      flex: 1
    }
});

/*
 *
 */
const ReviewActionButtons = ({item }) => {


  return (
    <View style={ styles.actionButtonsContainer } >

      <Pressable 
        testID="reviewActionButtonsViewBtn" 
        onPress={() => item.actions.view() } 
        style={ styles.viewRepositoryBtn } 
        disabled={false}
      >
        <Text
            fontWeight = "bold" 
            color={'loginBtnTxt'}
            textAlign = "center"
        >View Repository</Text>

      </Pressable>

      <Pressable 
        testID="reviewActionButtonsRemoveBtn" 
        onPress={() => item.actions.delete()} 
        style={ styles.deleteReviewBtn } 
        disabled={false}
      >
        <Text
            fontWeight = "bold" 
            color={'loginBtnTxt'}
            textAlign = "center"
        >Delete review</Text>
      </Pressable>

    </View>
  );
};

// loginBtnTxt

export default ReviewActionButtons;