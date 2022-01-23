/*
 * @Author: 孙山峰
 * @Date: 2022-01-23 12:19:32
 * @LastEditTime: 2022-01-23 12:35:47
 * @LastEditors: 孙山峰
 * @Description: 
 * @FilePath: \eggServices\config\plugin.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

export default plugin;
