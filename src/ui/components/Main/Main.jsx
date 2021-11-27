import { useStoreActions } from 'easy-peasy';
import { Input } from '../general/Input/Input';
import { Button } from '../general/Button/Button';
import styles from './Main.module.css';

export const Main = () => {
  const sendEmail = useStoreActions((actions) => actions.sendEmail);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Welcome</h1>
      <h2 className={styles.h2}>Claim your NEARDROP</h2>
      <Input placeholder="Enter your email" />
      <Button text="Submit" onClick={sendEmail} />
    </div>
  );
};
