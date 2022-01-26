/*
 * @Author: 孙山峰
 * @Date: 2022-01-23 13:41:45
 * @LastEditTime: 2022-01-23 15:49:29
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
    });

    return mongoose.model('User', UserSchema);
}

