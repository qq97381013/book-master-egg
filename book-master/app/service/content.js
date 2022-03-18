'use strict';

const Service = require('egg').Service;

class ContentService extends Service {

   async getContent(sectionNo) {
    const { ctx, app } = this;
    const results = ctx.model.Content.find({ // Article为modal/article.js里面命名的名字
      sectionId: sectionNo,
    });
    return results;
  }
  async getContentIndex(contentIndex) {
    const { ctx, app } = this;
    const results = ctx.model.Content.find({ // Article为modal/article.js里面命名的名字
      index: Number.parseInt(contentIndex),
    });
    return results;
  }
}
module.exports = ContentService;
