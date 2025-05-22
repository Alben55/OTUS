import AuthService from "../src/api/AuthService";
import UserService from "../src/api/UserService";
import BookService from "./api/BookService.js";
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

describe("Book Tests", () => {
    it("Create book", async () => {
      const response = await BookService.createBook(config.user_id, "978-5-389-14847-3");
      expect(response.status).toBe(201);
      expect(response.data).toEual('isbn: 978-5-389-14847-3')
    });

    it("Update book", async () => {
        const response = await BookService.updateBook();
        expect(response.status).toBe(200);
        expect(response.data).toEqual('isbn: 978-5-17-136539-7')
      });

      it("Get book info", async () => {
        const response = await BookService.getBookInfo();
        expect(response.status).toBe(200);
      });     

      it("Delete book", async () => {
        const response = await BookService.deleteBook();
        expect(response.status).toBe(204);
      });           
  });