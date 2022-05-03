import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
    .string()
    .trim()
    .required('First Name is Required')
    .min(3, 'Must be 3 characters long'), 
    last_name: yup
    .string()
    .trim()
    .required('Last Name is required')
    .min(4, 'Must be 4 characters long'), 
    email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
    password: yup
    .string()
        .required('password is required')
        .min(6, "must be at least 6 characters long"),
    tos: yup
    .boolean()
    .oneOf([true], 'Must accept and TOS')
})

export default formSchema;