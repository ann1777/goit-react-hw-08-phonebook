import * as Yup from 'yup';
import 'yup-phone';

const addContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string().phone('+38', true, 'Valid number type +380*********'),
});

const LogInValidationSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .required('Required'),
});

const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .required('Required'),
});

export {
  addContactValidationSchema,
  LogInValidationSchema,
  registerValidationSchema,
};