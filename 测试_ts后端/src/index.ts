/*
 * @Author: TenderFlow
 * @Date: 2023-01-28 09:00:43
 * @LastEditTime: 2023-01-28 16:16:40
 * @LastEditors: TenderFlow
 * @FilePath: \a-imitate-website-by-NuxtjsAndExpress\测试_ts后端\src\index.ts
 * @Description: 
 * 
 */
import express from 'express';
import config from './bin_util/config'
const app = express();

let { PORT } = config;

app.get('/', (req, res) => {
    res.send('Hello world');
})
// 使用自制的路由文件
app.use("/",require("./routers/index.ts"));

app.listen(PORT, () => {
    console.log(`服务启动, 后台接口地址: http://localhost:${PORT}`);
})