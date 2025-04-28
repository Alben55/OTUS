import 'dotenv/config';

const config = {
  baseURL: process.env.TEST_API_URL,
  authURL: process.env.AUTH_API_URL,
  deleteURL: process.env.DELETE_API_URL,
  userInfoURL: process.env.USERINFO_API_URL,
  userName: process.env.TEST_USERNAME,
  password: process.env.TEST_PASSWORD,
  user_id: process.env.TEST_USERID
};

export default Object.freeze(config);
