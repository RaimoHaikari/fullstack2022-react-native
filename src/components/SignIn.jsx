import { Formik } from 'formik';
import * as Yup from 'yup';

import LoginForm from './LoginForm';

const initialValues = {
  username: '',
  password: '',
}


const validationSchema = Yup.object().shape({
  username: Yup
    .string()
    .min(3, 'Username must be at least 3 characters length!')
    .max(6, 'maximum length is 6')
    .required('Required'),
  password: Yup
    .string()
    .min(3, 'Password must be at least 3 characters length!')
    .max(6, 'maximum length is 6')
    .required('Required'),
});

const SignIn = () => {

  const onSubmit = values => {

    const username = values.username;
    const password = values.password;

    if(username !== initialValues.username && password !== initialValues.password){
      console.log(`U: ${username} & P: ${password}`);
    }
  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors, touched }) => <LoginForm touched={touched} errors={errors} onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;