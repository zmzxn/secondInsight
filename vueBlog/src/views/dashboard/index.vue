<template>
  <div class="article">
    <div class="article-cont">
      <ul class="article-cont-list">
        <li class="article-cont-list-item" v-for="(item, index) in data" :key="index">
          <div class="item-text">
            <div class="item-text-top">
              <div class="title">标题标题标题标题标题标题标题</div>
              <div class="tag">
                <div class="tag-item"><i class="el-icon-date"></i><span>2020-12-13</span></div>
                <div class="tag-item"><i class="el-icon-view"></i><span>10214</span></div>
                <div class="tag-item"><i class="el-icon-folder"></i><span>类别</span></div>
                <div class="tag-item"><i class="el-icon-chat-line-round"></i><span>评论</span></div>
              </div>
            </div>
            <div class="item-text-abstract">概要</div>
          </div>
          <div class="item-img">
            <img v-lazy="imgSrc" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getNowTimeStamp } from '@/utils'
export default {
  data() {
    return {
      imgSrc: 'http://static.wztmn.com/zzm.jpeg',
      data: [1, 2,3,4]
    }
  },
  mounted() {
    console.log(getNowTimeStamp())
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.article {
  &-cont {
    &-list {
      &-item {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        cursor: pointer;
        padding: 20px 0;
        border-bottom: 1px solid rgba(178,186,194,.15);
        &:first-child {
          padding-top: 0;
        }
        .item-text {
          width: calc(100% - 220px);
          margin-right: 20px;
          &-top {
            width: 100%;
            .title {
              width: 100%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 18px;
              padding-bottom: 20px;
              color: #666;
              &:hover {
                color: #409eff;
              }
            }
            .tag {
              width: 100%;
              box-sizing: border-box;
              display: flex;
              flex-direction: row;
              color: #666;
              &-item {
                margin-right: 20px;
                &>i {
                  margin-right: 5px;
                }
                &:last-child {
                  cursor: pointer;
                  &:hover {
                    color: #409eff;
                  }
                }
              }
            }
          }
          &-abstract {
            width: 100%;
            box-sizing: border-box;
            padding-top: 20px;
            color: #999;
          }
        }
        .item-img {
          width: 200px;
          height: 200px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>