/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1631782670991_5130';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  exports.mongoose = {
    client: {
      url: 'mongodb://106.13.77.200:27017/book', // 你的数据库地址，egg_article是你数据库得名字
      options: {
        useNewUrlParser: true,
      },
    },
  };
  return {
    ...config,
    ...userConfig,
  };

};
