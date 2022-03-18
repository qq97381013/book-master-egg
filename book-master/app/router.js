'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getAllBooks',controller.books.getAllBooks)
  router.get('/getBookSection',controller.section.getBookSection)
  router.get('/getBookContent',controller.content.getBookContent)
  router.get('/findByLikeSectionName',controller.section.findByLikeSectionName)
  router.get('/getContentIndex',controller.content.getContentIndex)
};
