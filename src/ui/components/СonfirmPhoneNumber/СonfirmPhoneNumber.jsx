import css from './СonfirmPhoneNumber.module.css';
import { Input } from '../general/Input/Input';
import { Button } from '../general/Button/Button';
import { ErrorText } from '../general/ErrorText/ErrorText';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useForm } from 'react-hook-form';
import { resolver } from '../validations/validations';

const ConfirmPhoneNumber = () => {
  const isLoading = useStoreState((state) => state.loading.confirmPhoneNumber);
  const error = useStoreState((state) => state.errors.confirmPhoneNumber);
  const verifyCode = useStoreActions((actions) => actions.confirmPhoneNumber);
  const methods = useForm({ resolver });

  const { handleSubmit, register } = methods;
  const { errors } = methods.formState;
  const onSubmit = handleSubmit(verifyCode);

  return (
    <div className={css.container}>
      <h1 className={css.h1}>Almost there</h1>
      <h2 className={css.h2}>Verify your phone number</h2>
      <Input
        placeholder="Enter the verification code"
        register={register}
        name="confirmationCode"
        error={errors.confirmationCode}
      />
      <Button text="Submit" onClick={onSubmit} isLoading={isLoading} className={css.button} />
      <ErrorText error={error} />
    </div>
  );
};

export default ConfirmPhoneNumber;
