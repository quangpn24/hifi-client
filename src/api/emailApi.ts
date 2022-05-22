import axios from 'axios';
import axiosClient from './axiosClient';

const emailApi = {
  sendAccountVerificationEmail: async (email: string, redirectPath?: string) => {
    return axiosClient.post('email/verify-account', {
      email,
      redirectPath,
    });
  },
  verifyAccountToken: async (accountId: string, token: string) => {
    return axiosClient.get('email/verify-account/' + accountId + '/' + token);
  },
};
export default emailApi;
