/*
 * @Author: TenderFlow
 * @Date: 2023-01-28 10:22:23
 * @LastEditTime: 2023-01-28 15:11:33
 * @LastEditors: TenderFlow
 * @FilePath: \a-imitate-website-by-NuxtjsAndExpress\测试_ts后端\src\bin_util\db.ts
 * @Description: 
 *  配置工具文件: 配置项: 数据库
 *  用途, 连接数据文件
 */

const mysql = require('mysql');
// 获取数据库配置信息
import config from './config';
const { DATABASE: dataConfig } = config;
require("./sql_utils")
const db = mysql.createConnection(dataConfig);

db.connect((err: any) => {
    if (err) {
        console.log('数据库连接失败:' + err.message);
        return;
    };
    console.log('数据库连接成功');
})

// 测试数据库是否正常连接
// db.query("select * from basic_user", (err: any, result: any) => {
//     if(err){
//         console.log("sql error");
//         console.log(err);
//     }else{
//         console.log(result);
//     }
// })


export default db
