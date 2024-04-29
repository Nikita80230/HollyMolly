import * as yup from 'yup';

export const FormSchema = yup.object().shape({
   email: yup.string().email()
        .required('This field is required'),
    password: yup.string()
         .min(8, 'Password is too short - should be 8 chars minimum.')
        .required('This field is required'),
  
 });
