const Controller = require('./base_controller');
class ContentController extends Controller {
  async getBookContent() {
    const { ctx } = this;
    const query = ctx.query;
    const contentInfo = await ctx.service.content.getContent(query.sectionId);
    this.success(contentInfo);
  }
  async getContentIndex() {
    const { ctx } = this;
    const query = ctx.query;
    const contentInfo = await ctx.service.content.getContentIndex(query.index);
    this.success(contentInfo);
  }
}

module.exports = ContentController;
