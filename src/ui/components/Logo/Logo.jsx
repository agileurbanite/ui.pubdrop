import nearText from '../../images/near-logo-text.svg';
import nextIcon from '../../images/near-logo-icon.svg';
import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={nearText} alt="NEAR" className={styles.nearText} />
      <img src={nextIcon} alt="NEAR logo" className={styles.nearIcon} />
      <span className={styles.miami}>MIAMI</span>
    </div>
  );
};
