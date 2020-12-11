<template>
  <div class="app-header" :class="searchBarFixed ? '':'visible'">
    <div class="app-header-cont">
      <div class="app-header-cont-logo">
        <img src="@img/logo.png" alt="">
      </div>
      <div class="app-header-cont-router">
        路由
      </div>
      <div class="app-header-cont-search">
        <el-input
            placeholder="输入关键词"
            v-model="search"
            suffix-icon="el-icon-search"
            @keyup.enter.native="getSearchCont">
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      searchBarFixed: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    getSearchCont() {
      console.log(this.search)
    },
    // 实现滚动吸顶效果，滚动计算
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.searchBarFixed = scrollTop > 400 // 400px距顶部的高度
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  .visible {
    transform: translateZ(0) !important;
  }
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: $mainTextColor;
    height: $mainHeight;
    z-index: 100;
    background: $mainTopBg;
    border-bottom: 1px solid #f1f1f1;
    transition: all .2s;
    transform: translate3d(0,-100%,0);
    &-cont {
      max-width: 1200px;
      margin: auto;
      display: flex;
      align-items: center;
      height: 100%;
      &-logo {
        width: 40px;
        height: 40px;
        margin-right: 20px;
        &>img {
            width: 100%;
            height: 100%;
        }
      }
      &-router {
        width: calc(100% - 260px);
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-between;
        position: relative;
        height: 100%;
        margin: 0;
        font-size: 18px;
      }
      &-search {

      }
    }
  }
</style>