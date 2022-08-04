/* eslint-disable */ 
import { Formik } from 'formik';
import * as Yup from 'yup';

import SignUpForm from './SignUpForm';

import { useNavigate } from 'react-router-native';
import useSingUp from '../hooks/useSignUp';
import useSingIn from '../hooks/useSignIn';

//mport AuthStorage from '../utils/authStorage';

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: ''
}


const validationSchema = Yup.object().shape({
  username: Yup
    .string()
    .min(1, 'Username must be at least 1 characters length!')
    .max(10, 'maximum length is 30')
    .required('Required'),
  password: Yup
    .string()
    .min(5, 'Password must be at least 5 characters length!')
    .max(50, 'maximum length is 50')
    .required('Required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords don't match")
    .required('Password confirm is required')
});


const SignUp = () => {

    const navigate = useNavigate();

    const [signUp] = useSingUp();
    const [signIn] = useSingIn();

    const onSubmit = async (values) => {

        const username = values.username;
        const password = values.password;
    
    
        try {
    
          const {data} = await signUp({ username, password});

          if(data) {
            console.log(data.createUser);

            await signIn({ username, password});
            navigate("/");
            
          }

    
    
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
            <SignUpForm touched={touched} errors={errors} onSubmit={handleSubmit} />
          );
        }}
      </Formik>
    );
};

export default SignUp;