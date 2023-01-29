<!--
 * @Author: TenderFlow
 * @Date: 2023-01-29 09:30:00
 * @LastEditTime: 2023-01-29 10:52:21
 * @LastEditors: TenderFlow
 * @FilePath: \imitate-website-front-end\app.vue
 * @Description: 
 * 
-->
<template>
  <div>
    <NuxtLayout name="default"></NuxtLayout>
    <NuxtPage> 测试内容123 </NuxtPage>
  </div>
</template>

<script>
import { definePageMeta } from "nuxt/dist/pages/runtime";

definePageMeta({
  layout:"default"
})
</script>
