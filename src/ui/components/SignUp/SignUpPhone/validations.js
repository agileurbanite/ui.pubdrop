import * as Yup from 'yup';
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import { yupResolver } from '@hookform/resolvers/yup';

Yup.addMethod(Yup.string, 'isValidPhoneNumber', function (errorMessage) {
  return this.test(`test-valid-phone`, errorMessage, function (value) {
    const { path, createError } = this;
    return (value && isPossiblePhoneNumber(value)) || createError({ path, message: errorMessage });
  });
});

const errors = {
  required: 'Phone number is required',
  invalidPhoneNumber: 'Invalid phone number format',
};

const schema = Yup.object().shape({
  phone: Yup.string().required(errors.required).isValidPhoneNumber(errors.invalidPhoneNumber),
});

export const resolver = yupResolver(schema);
