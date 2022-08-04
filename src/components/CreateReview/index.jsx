/* eslint-disable */
import { Formik } from 'formik';
import * as Yup from 'yup';

import ReviewForm from "./ReviewForm";

import { useNavigate } from 'react-router-native';
import useAddReview from '../../hooks/useAddReview';

const initialValues = {
  owner: '',
  name: '',
  rating: '0',
  review: ''
}

const validationSchema = Yup.object().shape({
  owner: Yup
    .string()
    .required('Owner name is required'),
  name: Yup
    .string()
    .required('Name of the repository is required'),
  rating: Yup
    .number()
    .positive()
    .typeError('Rating must be a number')
    .min(0, 'Rating must be a number between 0 and 100')
    .max(100, 'Rating must be a number between 0 and 100')
    .required('Rating value is required'),
  review: Yup
    .string()
});


const CreateReview = () => {

    const [addReview] = useAddReview();
    const navigate = useNavigate();

    const onSubmit = async (values) => {

      const owner = values.owner;
      const name = values.name;
      const rating = parseInt(values.rating);
      const review = values.review;

      try {

        const {data} = await addReview({ owner, name, rating, review});
        //console.log(`/${data.repository.ownerName}/${data.repository.name}`)
  
        navigate(`/repository/${data.repository.ownerName}.${data.repository.name}`);
  
  
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
                <ReviewForm touched={touched} errors={errors} onSubmit={handleSubmit} />
            );
            }}
        </Formik>
    )
}

export default CreateReview;