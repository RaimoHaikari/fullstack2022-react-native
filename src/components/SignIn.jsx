import { Formik } from 'formik';
import * as Yup from 'yup';

import LoginForm from './LoginForm';

import { useNavigate } from 'react-router-native';
import useSignIn from "../hooks/useSignIn";


//mport AuthStorage from '../utils/authStorage';

const initialValues = {
  username: '',
  password: '',
}


const validationSchema = Yup.object().shape({
  username: Yup
    .string()
    .min(3, 'Username must be at least 3 characters length!')
    .max(10, 'maximum length is 10')
    .required('Required'),
  password: Yup
    .string()
    .min(5, 'Password must be at least 5 characters length!')
    .max(30, 'maximum length is 30')
    .required('Required'),
});

/*
 * Testauskäyttöä varten.
 * - tietoja ei lueta palvelimelta, vaan käytetään parametrin välittämää testiaineistoa
 */
export const SignInContainer = ({onSubmit}) => {


  const xxSubmit = async (values) => {

    const username = values.username;
    const password = values.password;

    onSubmit({
      username,
      password
    })

  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={xxSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors, touched }) => {
        return( 
          <LoginForm touched={touched} errors={errors} onSubmit={handleSubmit} />
        );
      }}
    </Formik>
  );

}

const SignIn = () => {

  const [signIn] = useSignIn();

  const navigate = useNavigate();

  const onSubmit = async (values) => {

    const username = values.username;
    const password = values.password;


    try {

      await signIn({ username, password});

      navigate("/");


    } catch (e) {
      console.log(e)
    }
  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors, touched }) => {
        return( 
          <LoginForm touched={touched} errors={errors} onSubmit={handleSubmit} />
        );
      }}
    </Formik>
  );
};

export default SignIn;