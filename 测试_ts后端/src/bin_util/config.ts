/*
 * @Author: TenderFlow
 * @Date: 2023-01-28 09:49:46
 * @LastEditTime: 2023-01-28 14:51:44
 * @LastEditors: TenderFlow
 * @FilePath: \a-imitate-website-by-NuxtjsAndExpress\测试_ts后端\src\bin\config.ts
 * @Description: 
 * 
 */
export default {
    // 端口号
    PORT: 20202,
    DATABASE: {
        // 主机名称, 后续替换为网络主机及其存储的数据库
        // host: "localhost",
        host:"120.78.77.6",
        // 数据库主机端口, 默认为3306
        port: 3306,
        // 数据库用户名
        // user: "imitate_user",
        user: "root",
        // 数据库用户密码
        // password: "123321",
        password: "123321",
        // 此次使用数据库名
        database: "imitate_website"
    }
}