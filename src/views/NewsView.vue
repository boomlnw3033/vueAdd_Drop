<script setup>
import NewsItems from "../components/NewsItems.vue";
import { newStore } from "../stores/counter";
const listState = newStore().$state.newsList;
</script>

<template>
  <div><h1 class="head-news">ข่าว</h1></div>
  <v-divider style="margin-bottom: 1rem"></v-divider>
  <div class="news" v-for="n in listState" :key="n">
    <NewsItems
      :title="n.head_title"
      :subtitle="n.title"
      :pic="n.pic"
    ></NewsItems>
  </div>
  <v-divider></v-divider>
</template>

<style scoped>
.head-news {
  border-radius: 15px 15px 15px 15px;
  margin-bottom: 2rem;
  text-align: center;
}
.news {
  margin-bottom: 1rem;
}
</style>
