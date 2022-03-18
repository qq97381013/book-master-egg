'use strict';

const Service = require('egg').Service;

class BooksService extends Service {
  async get(page) {
    const { ctx, app } = this;
    try {
      var page=page || 1;
      var pageSize=30;
      var total=await this.ctx.model.Books.find({}).count();
      const results = await ctx.model.Books.find({ // Article为modal/article.js里面命名的名字
        // _id: app.mongoose.Types.ObjectId('5da034149b6e823ca2ea809d'),
      }).skip((page-1)*pageSize).limit(pageSize);
      return {results,total,totalPages:Math.ceil(total/pageSize)};
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
}

module.exports = BooksService;