import { useStoreActions, useStoreState } from 'easy-peasy';
import { useForm } from 'react-hook-form';
import { Input } from '../general/Input/Input';
import { Button } from '../general/Button/Button';
import { ErrorText } from '../general/ErrorText/ErrorText';
import { resolver } from './validations';
import styles from './SignUp.module.css';

export const SignUp = () => {
  const isLoading = useStoreState((state) => state.loading.sendEmail);
  const error = useStoreState((state) => state.errors.sendEmail);
  const signup = useStoreActions((actions) => actions.signup);
  const methods = useForm({ resolver });

  const { handleSubmit, register } = methods;
  const { errors } = methods.formState;
  const onSubmit = handleSubmit(signup);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Welcome</h1>
      <h2 className={styles.h2}>Claim your NEARDROP</h2>
      <Input placeholder="Enter your email" register={register} name="email" error={errors.email} />
      <Button text="Submit" onClick={onSubmit} isLoading={isLoading} />
      <ErrorText error={error} />
    </div>
  );
};
