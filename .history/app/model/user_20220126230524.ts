/*
 * @Author: 孙山峰
 * @Date: 2022-01-23 13:41:45
 * @LastEditTime: 2022-01-23 18:41:11
 * @LastEditors: 孙山峰
 * @Description: 
 * @FilePath: \eggServices\app\model\user.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        userName: { type: String },
        password: { type: String },
        userId: {
            type: String,
            unique: true
        },
        phone: {
            type: String,
            match: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        },
        avatar: {
            type: String,
            required: true
        },
        vip: {
            type: {}
        }
    });

    return mongoose.model('User', UserSchema);
}

