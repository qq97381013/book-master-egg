'use strict'

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 下面得操作是连接数据库
  const SectionSchema = new Schema({
    // 修改和新增用到，规定字段得类型和其他条件等
    _id: {
      type: Schema.ObjectId,
      ref: 'Tags'
    }
  }, { versionKey: false });
 
  return mongoose.model('Section', SectionSchema,'section'); 
  // 我的理解：Article是指定查找的入口，随便取；ArticleSchema是参数；article是你数据集合表的名称
};