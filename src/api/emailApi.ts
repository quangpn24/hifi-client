import axios from 'axios';
import axiosClient from './axiosClient';

const emailApi = {
  sendAccountVerificationEmail: async (email: string) => {
    return axiosClient.post('email/verify-account', {
      email,
    });
  },
  verifyAccountToken: async (accountId: string, token: string) => {
    return axiosClient.get('email/verify-account/' + accountId + '/' + token);
  },
};
export default emailApi;
