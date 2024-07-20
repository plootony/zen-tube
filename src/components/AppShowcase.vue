<template>
  <div class="showcase">
    <ul
      v-if="true"
      class="showcase__list"
    >
      <li
        v-for="item in items"
        :key="item.id"
        class="showcase__item"
      >
        <img
          :src="item.snippet.thumbnails.medium.url"
          alt="Превью"
          class="showcase__item-img"
          width="500"
          height="281"
        />

        <div class="showcase__item-body">
          <h2 class="showcase__item-title">{{ item.snippet.title }} {{ item.id.kind }}</h2>

          <p class="showcase__item-desc">{{ item.snippet.channelTitle }}</p>

          <p class="showcase__item-desc">65 тыс. просмотров 8 дней назад</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['items'])
</script>

<style scoped></style>
