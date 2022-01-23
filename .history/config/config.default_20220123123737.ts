/*
 * @Author: 孙山峰
 * @Date: 2022-01-23 12:19:32
 * @LastEditTime: 2022-01-23 12:37:37
 * @LastEditors: 孙山峰
 * @Description: 
 * @FilePath: \eggServices\config\config.default.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1642911551953_1658';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};


// {app_root}/config/config.default.js
export const mongoose = {
  url: 'mongodb://127.0.0.1/example',
  options: {},
  // mongoose global plugins, expected a function or an array of function and options
  // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
};
// recommended
// exports.mongoose = {
//   client: {
//     url: 'mongodb://127.0.0.1/example',
//     options: {},
//     // mongoose global plugins, expected a function or an array of function and options
//     plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
//   },
// };