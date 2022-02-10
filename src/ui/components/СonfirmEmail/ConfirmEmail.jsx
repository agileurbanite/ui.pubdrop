import { useStoreActions, useStoreState } from 'easy-peasy';
import { useForm } from 'react-hook-form';
import { Button } from '../general/Button/Button';
import { ErrorText } from '../general/ErrorText/ErrorText';
import { Input } from '../general/Input/Input';
import { resolver } from '../validations/validations';
import css from './ConfirmEmail.module.css';
import cn from 'classnames';
import { event } from '../../../config/event';

export const ConfirmEmail = () => {
  const isLoading = useStoreState((state) => state.loading.confirmEmail);
  const error = useStoreState((state) => state.errors.confirmEmail);
  const verifyCode = useStoreActions((actions) => actions.confirmEmail);
  const methods = useForm({ resolver });

  const { handleSubmit, register } = methods;
  const { errors } = methods.formState;
  const onSubmit = handleSubmit(verifyCode);

  return (
    <div className={cn(css.container, css[event.name])}>
      <h1 className={css.h1}>Almost there</h1>
      <h2 className={css.h2}>Verify your email</h2>
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
