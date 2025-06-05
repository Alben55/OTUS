import apiClient from './apiClient';
import config from '../../framework/config/config';

const AuthService = {
  login(username, password) {
    return apiClient.post(config.authURL, { username, password });
  },
};

export default AuthService;
