const {
  REACT_APP_NEAR_WALLET: nearWallet,
  REACT_APP_CAMPAIGN_ID: campaignId,
  REACT_APP_REDIRECT_TO: redirectTo,
} = process.env;

export const goToWalletClaimPage = (secretKey) => {
  window.location.replace(
    `${nearWallet}/linkdrop/${campaignId}/${secretKey}?redirectUrl=${redirectTo}`,
  );
};
