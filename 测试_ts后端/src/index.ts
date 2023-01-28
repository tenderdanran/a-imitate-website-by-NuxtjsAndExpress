/*
 * @Author: TenderFlow
 * @Date: 2023-01-28 09:00:43
 * @LastEditTime: 2023-01-28 10:09:29
 * @LastEditors: TenderFlow
 * @FilePath: \a-imitate-website-by-NuxtjsAndExpress\测试_ts后端\src\index.ts
 * @Description: 
 * 
 */
import express from 'express';
import config from './bin/config'
const app = express();

let { PORT } = config;

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(PORT, () => {
    console.log(`服务启动, 地址: http://localhost:${PORT}`);
})