<template>
  <div class="c-categories-grid">
    <nuxt-link v-for="c in categories" :key="c.name" :to="c.url" class="c-category">
      {{ c.name }}
    </nuxt-link>
  </div>
</template>

<script>
import { categories } from '~/data/data.json'

export default {
  name: 'CategoriesGrid',
  data () {
    return {
      categories
    }
  }
}
</script>

<style lang="scss">
.c-categories-grid {
  $size: 12vmax;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
  grid-auto-rows: $size;
  grid-gap: 2rem;
}

.c-category {
  text-align: center;
  background-color: #f1f1f2;
  transition: all ease 0.2s;

  &:hover {
    background-color: #acc743;
  }
}
</style>
