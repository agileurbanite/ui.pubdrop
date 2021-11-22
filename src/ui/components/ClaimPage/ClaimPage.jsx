import styles from './ClaimPage.module.css';

const {
  REACT_APP_NEAR_WALLET: newWallet,
  REACT_APP_CONTRACT_ID: contractId,
  REACT_APP_SECRET_KEY: secretKey,
  REACT_APP_REDIRECT_TO: redirectTo,
} = process.env;

const link = `${newWallet}/linkdrop/${contractId}/${secretKey}?redirectUrl=${redirectTo}`;

export const ClaimPage = () => (
  <div className={styles.container}>
    <a href={link} target="_blank" rel="noreferrer">
      Claim NEAR
    </a>
  </div>
);
