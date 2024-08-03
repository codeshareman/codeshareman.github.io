<script setup>
import { getNoteCategory } from '../models/note';
import CardItem from './CardItem.vue';
const categories = getNoteCategory();

</script>

<template>
  <HomeBox :type="type" :background-image="backgroundImage" :background-attachment="backgroundAttachment" :full="full">
    <div class="notes card-wrapper">
      <div v-for="(item, index) in categories">
        <CardItem :data="item">{{ item.name }}</CardItem>
      </div>
    </div>
  </HomeBox>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.card-wrapper {
  display: grid;
  grid: auto-flow / 1fr 1fr 1fr;
  gap: 20px;
}

.vp-home-box {
  padding: 32px 0;
}
</style>
