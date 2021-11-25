import { useStoreActions } from 'easy-peasy';
import { Input } from '../general/Input/Input';
import { Button } from '../general/Button/Button';
import styles from './Main.module.css';

export const Main = () => {
  const sendEmail = useStoreActions((actions) => actions.sendEmail);

  return (
    <div className={styles.container}>
      <h1>Welcome</h1>
      <h2>Claim your NEAR drop</h2>
      <Input placeholder="Enter your email" />
      <Button text="submit" onClick={sendEmail} />
    </div>
  );
};
