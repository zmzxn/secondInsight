<template>
  <div class="app-header" :class="searchBarFixed ? '':'visible'">
    <div class="app-header-cont">
      <div class="app-header-cont-logo">
        <img src="@img/logo.png" alt="">
      </div>
      <div class="app-header-cont-router">
        <ul class="router-cont">
          <li class="router-cont-item" v-for="(item, index) in routerList" :key="index" @click="handleLinkTo(item)" :class="item.menuActive ? 'active':''">
            <span>{{item.meta.title}}</span>
          </li>
        </ul>
      </div>
      <div class="app-header-cont-search">
        <div class="search-cont" :class="{ 'input-focus': isFocus }">
          <input v-model="search"  type="text" maxlength="100" autocomplete="off" placeholder="请输入关键词搜索"  @focus="isFocus = true" @blur="isFocus = false" />
          <span class="search-btn" :class="search ? 'btn-col':''"><svg-icon icon-class="search"></svg-icon></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFocus: false,
      search: '',
      searchBarFixed: false,
      routerList: this.$store.state.menu.routerList
    }
  },
  watch: {
    $route(to, from) {
        console.log(to, from)
        this.selectMenu()
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.selectMenu()
  },
  methods: {
    getSearchCont() {
      console.log(this.search)
    },
    // 实现滚动吸顶效果，滚动计算
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.searchBarFixed = scrollTop > 400 // 400px距顶部的高度
    },
    // 左侧菜单点击 路由跳转
    handleLinkTo(item) {
        if (item.menuActive) { return }
        this.$router.push({
            name: item.name
        })
    },
    // 左侧菜单的默认选中
    selectMenu() {
      const routeName = this.$route.name
      const routerList = this.routerList
      if (!routerList) {
          return false
      }
      routerList.forEach((item, index) => {
        if (item.name === routeName) {
          this.$set(this.routerList[index], 'menuActive', true)
        } else {
          this.$set(this.routerList[index], 'menuActive', false)
        }
      })
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
        width: calc(100% - 560px);
        position: relative;
        height: 100%;
        margin: 0;
        font-size: 18px;
        display: flex;
        align-items: center;
        .router-cont {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          justify-content: flex-start;
          align-items: center;
          &-item {
            margin-right: 20px;
            &.active {
              color: $mainColor;
            }
            &:hover {
              color: $mainColor;
            }
          }
        }
      }
      &-search {
        width: 500px;
        height: 34px;
        position: relative;
        
        .search-cont {
          width: 100%;
          height: 34px;
          background: #f6f6f6;
          border-radius: 999px;
          padding-left: 16px;
          border: 1px solid #f6f6f6;
          &.input-focus {
            background-color: #fff;
            border-color: #8590a6;
            .search-btn {
              color: $mainColor;
            }
          }
          input {
            padding: 0;
            overflow: hidden;
            font-family: inherit;
            font-size: inherit;
            font-weight: inherit;
            background: transparent;
            border: none;
            resize: none;
            color: #121212;
            height: 32px;
            width: 100%;
            &:focus {
              outline: none;
            }
          }
        }
        .search-btn {
          position: absolute;
          right: 0;
          cursor: pointer;
          border-bottom-right-radius: 999px;
          border-top-right-radius: 999px;
          margin-left: 12px;
          padding: 0 12px;
          background: transparent;
          border-color: transparent;
          color: #333;
          display: inline-block;
          font-size: 20px;
          line-height: 32px;
          text-align: center;
          &:hover {
            color: $mainColor;
          }
          &.btn-col {
            background-color: $mainColor;
            color: #fff !important;
          }
        }
      }
    }
  }
</style>