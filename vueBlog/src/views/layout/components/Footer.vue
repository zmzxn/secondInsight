<template>
  <div class="app-footer">
    <p>Copyright© 2020 二更灼见 , Inc. All rights reserved</p>
    <p><a href="https://beian.miit.gov.cn/#/Integrated/index">豫ICP备19043879号-1</a></p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .app-footer {
    width: 100%;
    text-align: center;
    padding: 10px 0;
    box-sizing: border-box;
    color: #999;
    p {
      a {
        color: #999;
      }
      &:last-child {
        padding-top: 10px;
      }
    }
  }
</style>