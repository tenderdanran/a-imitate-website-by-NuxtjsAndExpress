/*
 * @Author: TenderFlow
 * @Date: 2023-01-28 10:21:36
 * @LastEditTime: 2023-01-28 15:25:22
 * @LastEditors: TenderFlow
 * @FilePath: \a-imitate-website-by-NuxtjsAndExpress\测试_ts后端\src\test\testSQL\testSQL.ts
 * @Description: 
 * 
 */
const express = require('express');
const {RunSQL} = require('../../bin_util/sql_utils');


console.log("testSQL已启动")
// console.log(RunSQL) // 此处如果直接获取, 只会获取到普通的Promise对象,需要通过then和cache取出res与err内容
console.log(RunSQL("SELECT * FROM basic_user").then((result:any)=>{
    console.log(result)
}))