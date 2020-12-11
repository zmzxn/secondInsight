<template>
  <div>
    我是首页
    <el-button @click="NavToBtn">点击跳转</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    NavToBtn() {
      this.$router.push({
        name: 'article'
      })
    }
  }
}
</script>

<style>

</style>