'use strict';
const Controller = require('./base_controller');
class SectionController extends Controller {
  async getBookSection() {
    const { ctx } = this;
    const query = ctx.query;
    const sectionInfo = await ctx.service.section.getSection(query.bookNo,query.page);
    var total=await this.ctx.model.Section.find({}).count();
    const data = {sectionInfo,total};
    this.success(data);
  }
  async findByLikeSectionName() {
    const { ctx } = this;
    const query = ctx.query;
    const section = await ctx.service.section.findByLikeSectionName(query);
    const data = {section};
    this.success(data);
  }
}
module.exports = SectionController;
