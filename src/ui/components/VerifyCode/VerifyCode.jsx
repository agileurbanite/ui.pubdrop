import { useStoreActions } from 'easy-peasy';
import { Button } from '../general/Button/Button';
import { Input } from '../general/Input/Input';
import styles from './VerifyCode.module.css';

export const VerifyCode = () => {
  const verifyCode = useStoreActions((actions) => actions.verifyCode);

  return (
    <div className={styles.container}>
      <h1>Verify Code</h1>
      <h2>Enter your validation code to continue</h2>
      <Input placeholder="Enter your code" />
      <Button text="submit" onClick={verifyCode} />
    </div>
  );
};
