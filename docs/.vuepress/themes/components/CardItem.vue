<script setup lang="ts">
import { useRoute, useRouter } from 'vuepress/client';
import { NoteCategoryMeta } from '../models/note'
const props = defineProps<{
  data?: NoteCategoryMeta
}>()
// 获取当前的路由位置
const route = useRoute()
// 或者 vue-router 实例
const router = useRouter()

const { data } = props;

function goto() {
  router.push(data?.link || '')
}



</script>

<template>
  <div class="card-item" @click="goto">
    <div class="banner">
      <img :src="data?.imgLink" />
    </div>
    <div class="intro">
      <div class="title">{{ data?.title || '--' }}</div>
      <div v-if="data?.subTitle" class="subtitle">{{ data?.subTitle }}</div>
      <div class="meta-data">
        <div class="author">{{ data?.author }}</div>
        <div class="update-time">{{ data?.updateTime }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-item {
  display: flex;
  flex-direction: column;
  height: 256px;
  overflow: hidden;
  box-shadow: -1px 1px 10px #e6e6e6;
  border-radius: 10px;
  transition: border-radius 0.4s ease-out;

  &:hover {
    border-radius: 0;
    transform: border-radius 1s ease-in;
    cursor: pointer;
  }

  .banner {
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      user-select: none;
      transition: all 0.3s ease-out;
    }

    &:hover {
      img {
        transform: scale(1.1);
        transition: all 0.3s ease-in;
      }
    }
  }

  .intro {
    padding: 10px;

    .title {
      font-size: 16px;
    }

    .meta-data {
      .author {
        color: #aaa;
        font-size: 12px;
      }

      .update-time {
        color: #8d9eb0;
        font-size: 12px;
      }
    }
  }
}
</style>
