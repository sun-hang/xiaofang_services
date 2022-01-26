/*
 * @Author: 孙山峰
 * @Date: 2022-01-23 13:42:53
 * @LastEditTime: 2022-01-23 13:42:54
 * @LastEditors: 孙山峰
 * @Description: 
 * @FilePath: \eggServices\app\model\shoppingRecords.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
//购物记录
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const ShoppingRecord = new Schema({
        productId: {
            type: String
        },
        shoppingInfoId: {
            type: String
        },
        userId: {
            type: String,
            required: true
        }
    });

    return mongoose.model('ShoppingRecord', ShoppingRecord);
}