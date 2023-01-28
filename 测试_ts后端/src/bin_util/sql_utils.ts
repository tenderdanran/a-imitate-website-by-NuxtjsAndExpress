/*
 * @Author: TenderFlow
 * @Date: 2023-01-28 14:03:07
 * @LastEditTime: 2023-01-28 15:25:09
 * @LastEditors: TenderFlow
 * @FilePath: \a-imitate-website-by-NuxtjsAndExpress\测试_ts后端\src\bin_util\sql_utils.ts
 * @Description: 
 *  工具类, 用于执行sql
 */
import db from "./db";

export async function RunSQL(sql: string) {
    return new Promise((resolve, reject) => {
        console.log("运行sql片段: " + sql);
        db.query(sql,(err:any,result:any)=>{
            if(err){
                reject(err);
            }else{
                
                resolve(result);
            }
        })
    })
}
