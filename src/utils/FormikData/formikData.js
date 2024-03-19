import * as Yup from 'yup';

// SIGN UP SCHEME INTIAL VALUES
export const signUpInitialValues = {
  name: '',
  lastname: '',
  email: '',
  phonenumber: '',
  password: '',
  confirmpassword: '',
  lawyerID: '',
  user_type: 'Lawyer Type',
};

// SIGN UP SCHEME DATA
export const SignUpSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Too Short')
    .max(15, 'Must be 15 characters or less')
    .matches(/^[A-Za-z]+$/, 'First Name must contain only letters')
    .required('Please enter your First Name'),
  lastname: Yup.string()
    .min(3, 'Too Short')
    .max(15, 'Must be 15 characters or less')
    .matches(/^[A-Za-z]+$/, 'Last Name must contain only letters')
    .required('Please enter your Last Name'),
  email: Yup.string()
    .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Invalid Email')
    .required('Please enter your Email'),
  phonenumber: Yup.string()
    .matches(/^[0-9]{11}$/, 'Invalid phone number format (11 digits only)')
    .required('Please enter your Phone Number'),
  password: Yup.string()
    .min(8, 'Too Short')
    .required('Please enter your password'),
  confirmpassword: Yup.string()
    .min(8)
    .oneOf([Yup.ref('password'), null], 'Your Password do not match')
    .required('Please confirm your password'),
  lawyerID: Yup.string().required('Lawyer ID is required'),
});

// Login SCHEME INTIAL VALUES
export const loginInitialValues = {
  email: '',
  password: '',
};

// LOGIN SCHEME DATA
export const LoginSchema = Yup.object({
  email: Yup.string()
    .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Invalid Email')
    .required('Please enter your Email'),
  password: Yup.string()
    .min(8, 'Too Short')
    .max(20, 'Must be 20 characters or less')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character',
    )
    .required('Please enter your password'),
});
