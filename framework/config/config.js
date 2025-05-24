import 'dotenv/config';

const config = {
  baseURL: process.env.TEST_API_URL,
  authURL: process.env.AUTH_API_URL,
  deleteURL: process.env.DELETE_API_URL,
  userInfoURL: process.env.USERINFO_API_URL,
  createBookURL: process.env.CREATE_BOOK_URL,
  updateBookURL: process.env.UPDATE_BOOK_URL,
  getBookInfoURL: process.env.GET_BOOK_INFO_URL,
  deleteBookURL: process.env.DELETE_BOOK_URL,
  userName: process.env.TEST_USERNAME,
  password: process.env.TEST_PASSWORD,
  user_id: process.env.TEST_USERID,
};

export default Object.freeze(config);
