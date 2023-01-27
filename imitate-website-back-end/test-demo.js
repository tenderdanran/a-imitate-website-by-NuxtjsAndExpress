/*
 * @Author: TenderFlow
 * @Date: 2023-01-18 16:15:11
 * @LastEditTime: 2023-01-18 16:19:43
 * @LastEditors: TenderFlow
 * @FilePath: \a-imitate-website-by-NuxtjsAndExpress\imitate-website-back-end\test-demo.js
 * @Description: 
 * 
 */
const express = require("express");

const server = express();

server.listen(9090);
console.log(`Server started at 9090`)

server.use('/first', (req, res, next) => {
    console.log('first')
    next()
})

server.use('/first',(req, res, next)=>{
    
})