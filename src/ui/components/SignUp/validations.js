import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const errors = {
  required: 'Email is required',
  invalidEmail: 'Invalid email format',
  max: 'Email should be less than 100 symbols',
};

const schema = object().shape({
  email: string()
    .required(errors.required)
    .email(errors.invalidEmail)
    .trim()
    .lowercase()
    .max(100, errors.max),
});

export const resolver = yupResolver(schema);
