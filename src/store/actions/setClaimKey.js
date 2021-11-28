import { action } from 'easy-peasy';

export const setClaimKey = action((state, payload) => {
  state.claimPublicKey = payload.publicKey;
  state.claimSecretKey = payload.secretKey;
});
