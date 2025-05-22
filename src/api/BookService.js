import apiClient from "./apiClient";
import config from "../../framework/config/config";

const BookService = {
  createBook(userId, isbn) {
    return apiClient.post(config.createBookURL, { userId: userId, isbn: '978-5-389-14847-3' });
  },
  updateBook(isbn) {
    return apiClient.put(config.updateBookURL, { data: { ISBN: '978-5-17-136539-7' } });
  },
  getBookInfo(isbn) {
    return apiClient.get(config.getBookInfoURL, { data: { ISBN: '978-5-17-136539-7'} });
  },
  deleteBook(isbn, userId) {
    return apiClient.delete(config.deleteBookURL, { isbn: '978-5-17-136539-7', userId: userId});
  }
}
export default BookService;