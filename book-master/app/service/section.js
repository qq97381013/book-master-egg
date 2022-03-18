'use strict';

const Service = require('egg').Service;

class SectionService extends Service {
  async getSection(book,page) {
    const { ctx, app } = this;
    var page=page || 1;
    var pageSize=30;
    const results = await ctx.model.Section.find({
      bookNo:book
    }).skip((page-1)*pageSize).limit(pageSize);
    return results;
  }
  async findByLikeSectionName(query){
    const { ctx, app } = this;
    let  title = query.title;
    let results = null;
    if(Number.parseInt(title)){
          results = ctx.model.Section.find({
          index :  Number.parseInt(title)-1
      })
    }else{
      results = ctx.model.Section.find({
        title : {$regex : title}
      })
    }
    return results;
  }
}

module.exports = SectionService;
