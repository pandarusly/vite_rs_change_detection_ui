<template>
  <div>
    <!-- 点击按钮触发跳转 -->
    <button @click="goToAbout">跳转到 About</button>
    <button @click="goTomain">跳转到 Main</button>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    // 页面跳转事件
    goToAbout() {
      // 使用router.push方法进行跳转
      this.$router.push('/test');
    },
    goTomain() {
      // 使用router.push方法进行跳转
      this.$router.push('/main');
    }
  }
}
</script>
