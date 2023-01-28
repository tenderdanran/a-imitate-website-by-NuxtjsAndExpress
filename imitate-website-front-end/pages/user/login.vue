<!--
 * @Author: TenderFlow
 * @Date: 2023-01-28 17:29:51
 * @LastEditTime: 2023-01-28 21:17:32
 * @LastEditors: TenderFlow
 * @FilePath: \a-imitate-website-by-NuxtjsAndExpress\imitate-website-front-end\pages\user\login.vue
 * @Description: 
 * 
-->
<template>
  <div class="login-panel">
    <el-input placeholder="请输入账号"></el-input>
    <el-input placeholder="请输入密码"></el-input>
  </div>
</template>

<script>
export default {
  created() {
    console.log("测试跨域连接");
    this.$axios.$get("/").then((result) => {
      console.log(result);
    });
  },
};
</script>
<style  scoped>
.login-panel {
  display: grid;
  place-content: center;
}
el-input {
  margin: 20px;
}

el-input::before,
el-input::after {
  content: "";
  display: table;
  clear: both;
}
</style>