import {  Pressable, View, StyleSheet} from 'react-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

import theme from "../theme";

const styles = StyleSheet.create({
    loginFormContainer: {
      borderWidth: 1,
      padding: 10,
    },
    loginFormItem: {
      margin: 5
    },
    loginFormBtn: {
      margin: 5,
      backgroundColor: theme.colors.loginBtnBG,
      padding: 10,
      borderRadius: 5,
    },
    loginFormBtnDisabled: {
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
const LoginForm = ({ onSubmit, errors, touched }) => {

  const errorsTest = errors && Object.keys(errors).length === 0 && Object.getPrototypeOf(errors) === Object.prototype;
  const touchedTest = touched && Object.keys(touched).length !== 0 && Object.getPrototypeOf(touched) === Object.prototype;
  const submitActive = errorsTest && touchedTest;


  return (
    <View style={styles.loginFormContainer}>
      <FormikTextInput 
        style={styles.loginFormItem} 
        name="username" 
        placeholder="Username" 
      />
      <FormikTextInput 
        style={styles.loginFormItem} 
        secureTextEntry={true}
        name="password" 
        placeholder="Password" 
      />
      <Pressable style={ submitActive ? styles.loginFormBtn: styles.loginFormBtnDisabled } onPress={onSubmit} disabled={!submitActive}>
      <Text
        fontWeight = "bold" 
        color={submitActive ? 'loginBtnTxt' : 'loginBtnTxtDisabled'}
        textAlign = "center"
      >Sign In</Text>
      </Pressable>
    </View>
  );
};

// loginBtnTxt

export default LoginForm;