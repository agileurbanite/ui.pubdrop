import nearText from '../../images/near-logo-text.svg';
import nextIcon from '../../images/near-logo-icon.svg';
import miamiText from '../../images/miami-text.svg';
import styles from './Logo.module.css';

export const Logo = () => (
  <div className={styles.container}>
    <img src={nearText} alt="NEAR" className={styles.nearText} />
    <img src={nextIcon} alt="NEAR logo" className={styles.nearIcon} />
    <img src={miamiText} alt="Miami" className={styles.miami} />
  </div>
);
