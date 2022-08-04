import {  Pressable, View, StyleSheet} from 'react-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

import theme from "../theme";

const styles = StyleSheet.create({
    signUpFormContainer: {
      borderWidth: 1,
      padding: 10,
    },
    signUpFormFormItem: {
      margin: 5
    },
    signUpFormFormBtn: {
      margin: 5,
      backgroundColor: theme.colors.loginBtnBG,
      padding: 10,
      borderRadius: 5,
    },
    signUpFormFormBtnDisabled: {
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
const SignUpForm = ({ onSubmit, errors, touched }) => {

  const errorsTest = errors && Object.keys(errors).length === 0 && Object.getPrototypeOf(errors) === Object.prototype;
  const touchedTest = touched && Object.keys(touched).length !== 0 && Object.getPrototypeOf(touched) === Object.prototype;
  const submitActive = errorsTest && touchedTest;

  /*
disabled={!submitActive}
  */
  return (
    <View style={styles.signUpFormContainer}>
      <FormikTextInput 
        style={styles.signUpFormFormItem} 
        name="username" 
        placeholder="Username" 
      />
      <FormikTextInput 
        style={styles.signUpFormFormItem} 
        secureTextEntry={true}
        name="password" 
        placeholder="Password" 
      />
      <FormikTextInput 
        style={styles.signUpFormFormItem} 
        secureTextEntry={true}
        name="passwordConfirm" 
        placeholder="Confirm your password" 
      />
      <Pressable 
        testID="singInFormSubmitBtn" 
        style={ submitActive ? styles.signUpFormFormBtn: styles.signUpFormFormBtnDisabled } 
        onPress={onSubmit} 
        disabled={!submitActive}
      >
      <Text
        fontWeight = "bold" 
        color={submitActive ? 'loginBtnTxt' : 'loginBtnTxtDisabled'}
        textAlign = "center"
      >Sign Up</Text>
      </Pressable>
    </View>
  );
};

// loginBtnTxt

export default SignUpForm;