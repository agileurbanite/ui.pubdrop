import { useStoreActions, useStoreState } from 'easy-peasy';
import { Button } from '../general/Button/Button';
import { ErrorText } from '../general/ErrorText/ErrorText';
import { Input } from '../general/Input/Input';
import styles from './ConfirmEmail.module.css';

export const ConfirmEmail = () => {
  const isLoading = useStoreState((state) => state.loading.confirmEmail);
  const error = useStoreState((state) => state.errors.confirmEmail);
  const verifyCode = useStoreActions((actions) => actions.confirmEmail);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Almost there</h1>
      <h2 className={styles.h2}>Verify your email</h2>
      <Input placeholder="Enter the verification code" />
      <Button text="Submit" onClick={verifyCode} isLoading={isLoading} />
      <ErrorText error={error} />
    </div>
  );
};
