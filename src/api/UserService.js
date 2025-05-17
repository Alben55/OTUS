import apiClient from "./apiClient";
import config from "../../framework/config/config";

const UserService = {
  getUserInfo(userId) {
    return apiClient.get(config.userInfoURL, { params: { Userid: userId } });
  },

  deleteUser(userId) {
    return apiClient.delete(config.deleteURL, { data: { Userid: userId } });
  },
};

export default UserService;