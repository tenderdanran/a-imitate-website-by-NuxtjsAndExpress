<!--
 * @Author: TenderFlow
 * @Date: 2023-01-28 17:29:51
 * @LastEditTime: 2023-01-28 17:59:14
 * @LastEditors: TenderFlow
 * @FilePath: \imitate-website-front-end\pages\user\login.vue
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
    console.log("测试");
    let result = this.$axios.$get("http://120.78.77.6:20202/");
    console.log(result);
    result
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
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