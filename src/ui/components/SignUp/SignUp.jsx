import { useStoreActions, useStoreState } from 'easy-peasy';
import { Input } from '../general/Input/Input';
import { Button } from '../general/Button/Button';
import { ErrorText } from '../general/ErrorText/ErrorText';
import styles from './SignUp.module.css';

export const SignUp = () => {
  const isLoading = useStoreState((state) => state.loading.sendEmail);
  const error = useStoreState((state) => state.errors.sendEmail);
  const signup = useStoreActions((actions) => actions.signup);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Welcome</h1>
      <h2 className={styles.h2}>Claim your NEARDROP</h2>
      <Input placeholder="Enter your email" />
      <Button text="Submit" onClick={signup} isLoading={isLoading} />
      <ErrorText error={error} />
    </div>
  );
};
