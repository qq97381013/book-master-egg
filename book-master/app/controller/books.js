const Controller = require('./base_controller');
class BooksController extends Controller {
  async getAllBooks() {
    const { ctx } = this;
    ctx.model.Books;
    const res = await ctx.service.books.get();
    console.log(res);
    this.success(res);
  }
}

module.exports = BooksController;
