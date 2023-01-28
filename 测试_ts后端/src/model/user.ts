/*
 * @Author: TenderFlow
 * @Date: 2023-01-28 09:32:06
 * @LastEditTime: 2023-01-28 15:36:55
 * @LastEditors: TenderFlow
 * @FilePath: \a-imitate-website-by-NuxtjsAndExpress\测试_ts后端\src\domain\user.ts
 * @Description: 
 *  基础用户类型
 */
class User {
    private uid: number = 0;
    private account: string = "";
    private password: string = "";

    constructor(uid: number, account: string, password: string) {
        this.uid = uid;
        this.account = account;
        this.password = password;
    }

    getUid() {
        return this.uid;
    }
    getAccount() {
        return this.account;
    }
    getPassword() {
        return this.password;
    }
}