import {  Pressable, View, StyleSheet} from 'react-native';

import FormikTextInput from '../FormikTextInput';
import Text from '../Text';

import theme from "../../theme";

const styles = StyleSheet.create({
    reviewFormContainer: {
      borderWidth: 1,
      padding: 10,
    },
    reviewFormItem: {
      margin: 5
    },
    reviewFormBtn: {
      margin: 5,
      backgroundColor: theme.colors.loginBtnBG,
      padding: 10,
      borderRadius: 5,
    },
    reviewFormBtnDisabled: {
      margin: 5,
      backgroundColor: theme.colors.loginBtnBG,
      padding: 10,
      borderRadius: 5,
      opacity: 0.2
    }
});

/*
 *
 */
const ReviewForm = ({ onSubmit, errors, touched }) => {

  const errorsTest = errors && Object.keys(errors).length === 0 && Object.getPrototypeOf(errors) === Object.prototype;
  const touchedTest = touched && Object.keys(touched).length !== 0 && Object.getPrototypeOf(touched) === Object.prototype;
  const submitActive = errorsTest && touchedTest;

  /*
disabled={!submitActive}
  */
  return (
    <View style={styles.reviewFormContainer}>
      <FormikTextInput 
        style={styles.reviewFormItem} 
        name="owner" 
        placeholder="Repository owner name" 
      />
      <FormikTextInput 
        style={styles.reviewFormItem} 
        name="name" 
        placeholder="Repository name" 
      />
      <FormikTextInput 
        style={styles.reviewFormItem} 
        name="rating"
        placeholder="Rating between 0 and 100" 
      />
      <FormikTextInput 
        style={styles.reviewFormItem} 
        name="review" 
        multiline={true}
        numberOfLines={4}
        placeholder="Review" 
      />
      <Pressable 
        testID="reviewFormSubmitBtn" 
        style={ submitActive ? styles.reviewFormBtn: styles.reviewFormBtnDisabled } 
        onPress={onSubmit} 
        disabled={!submitActive}
      >
      <Text
        fontWeight = "bold" 
        color={submitActive ? 'loginBtnTxt' : 'loginBtnTxtDisabled'}
        textAlign = "center"
        >Create a review</Text>
      </Pressable>
    </View>
  );
};

// loginBtnTxt

export default ReviewForm;