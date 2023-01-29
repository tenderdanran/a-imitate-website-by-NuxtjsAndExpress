<!--
 * @Author: TenderFlow
 * @Date: 2023-01-29 09:55:59
 * @LastEditTime: 2023-01-29 10:10:00
 * @LastEditors: TenderFlow
 * @FilePath: \imitate-website-front-end\layout\default.vue
 * @Description: 
 * 
-->
<template>
  <div>
    <div class="header">测试头部栏</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less">
.header {
  border: 1px solid black;
  width: 100px;
}
</style>