/*
 * @Author: zhangmeng 
 * @Date: 2020-12-11 10:24:27 
 * @Last Modified by: zhangmeng
 * @Last Modified time: 2020-12-11 10:24:50
 */
<template>
  <div class="app-right">
    <div class="app-right-item app-right-about">
      <p class="app-right-title">关于我</p>
      <div class="about-user">
        <img src="@img/logo.png" alt="logo">
      </div>
      <div class="about-name">
        <span>名字还没想好</span>
      </div>
      <div class="about-wxcode">
        <img src="@img/wxcode.jpg" alt="code">
        <span>关注不迷路</span>
      </div>
      <div class="about-icon">
        <a href="https://github.com/zmzxn" target="_bank">
          <svg-icon class="about-icon-svg" icon-class="github" />
        </a>
        <el-tooltip class="item" effect="dark" content="718008748@qq.com" placement="right">
          <svg-icon class="about-icon-svg" icon-class="email" />
        </el-tooltip>
      </div>
    </div>
    <div class="app-right-item app-right-tag">
      <p class="app-right-title">标签</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .app-right {
    width: 100%;
    &-item {
      width: 100%;
      padding: 20px;
      background-color: #fff;
      box-sizing: border-box;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &-title {
      margin-bottom: 20px;
      font-size: 18px;
    }
    &-about {
     .about-user {
       width: 100px;
       height: 100px;
       margin: 0 auto;
     }
     .about-name {
       width: 100%;
       text-align: center;
       padding: 20px 0 10px;
       font-size: 18px;
       color: $mainActiveColor;
     }
     .about-wxcode {
       width: 200px;
       height: 200px;
       margin: 0 auto 20px;
       text-align: center;
       span {
         color: #999;
       }
     }
     .about-icon {
       width: 100%;
       padding-top: 20px;
       display: flex;
       flex-direction: row;
       justify-content: space-around;
       &-svg {
        font-size: 30px;
        cursor: pointer;
        &:hover {
          color: $mainActiveColor;
        }
       }
     }
     img {
       width: 100%;
       height: 100%;
     }
    }
  }
</style>