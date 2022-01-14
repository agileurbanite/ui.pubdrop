const API = process.env.REACT_APP_API;

export const api = {
  signup: `${API}/signup`,
  confirmEmail: `${API}/confirm-email`,
  confirmPhoneNumber: `${API}/confirm-phone-number`,
  keyStatus: `${API}/key-status`,
  campaignStatus: `${API}/campaign-status`,
};
