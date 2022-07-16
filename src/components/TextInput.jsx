/* eslint-disable */
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
  fieldInErrorState: {
    borderColor: "red",
  }
});

const TextInput = ({ style, error, ...props }) => {

  /* tsekataan onko kenttä virhetilassa */
  const fieldOk = error === false
                  ? true
                  : typeof error === 'undefined'
                    ? true
                    : false;

  const textInputStyle = [
    style,
    styles.input,
    fieldOk === false && styles.fieldInErrorState
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;