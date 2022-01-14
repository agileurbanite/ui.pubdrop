import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const errors = {
  required: 'Code is required',
  invalidFormat: 'Please enter a 4-digit code',
};

const regexp = {
  only4digits: /^\d{4}$/g,
};

const schema = object().shape({
  confirmationCode: string()
    .required(errors.required)
    .matches(regexp.only4digits, errors.invalidFormat),
});

export const resolver = yupResolver(schema);
