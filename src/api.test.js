import AuthService from "../src/api/AuthService";
import UserService from "../src/api/UserService";
import config from "../framework/config/config.js";

describe("API Tests", () => {
  it("Authorization", async () => {
    const response = await AuthService.login(config.userName, config.password);
    expect(response.status).toBe(200);
  });

  it("Get user info", async () => {
    const response = await UserService.getUserInfo(config.user_id);
    expect(response.status).toBe(200);
  });

  it("Delete user", async () => {
    const response = await UserService.deleteUser(config.user_id);
    expect(response.status).toBe(200);
  });
});