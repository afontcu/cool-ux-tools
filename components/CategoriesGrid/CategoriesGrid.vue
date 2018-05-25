<template>
  <div class="Categories-grid">
    <nuxt-link v-for="category in categories"
               :key="category.name"
               :to="category.url"
               class="Category u-padding-small">
      {{ category.name }}
    </nuxt-link>
  </div>
</template>

<script>
import { categories } from '~/data/data.json'

export default {
  name: 'CategoriesGrid',
  data () {
    return {
      categories,
    }
  },
}
</script>

<style lang="scss">
.Categories-grid {
  $size: 12vmax;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
  grid-auto-rows: $size;
  grid-gap: $global-spacing-unit;
}

.Category {
  text-align: center;
  background-color: #f1f1f2;
  transition: all ease 0.2s;

  &:hover {
    background-color: #acc743;
  }
}
</style>
