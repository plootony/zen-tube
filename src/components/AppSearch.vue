<template>
  <div class="search">
    <div class="search__input">
      <input
        v-model="query"
        @keyup.enter.prevent="search"
        type="text"
        placeholder="Введите название ролика"
      />

      <button
        @click="query = ''"
        class="btn btn--clear"
      >
        &#x2715;
      </button>

      <button
        @click="search"
        class="btn btn--search"
      >
        Искать
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const query = ref('')
const emit = defineEmits(['search'])

const search = () => {
  emit('search', query.value)
}
</script>
