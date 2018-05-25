<template>
  <div class="Categories-grid">
    <nuxt-link v-for="category in categories"
               :key="category.name"
               :to="category.url"
               class="Categories-grid__item u-text-h5"
    >
      <div class="u-padding">
        {{ category.name }}
      </div>
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
  $item-size: 150px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax($item-size, 1fr));
  grid-gap: $global-spacing-unit;
}

.Categories-grid__item {
  background-color: #f1f1f2;
  transition: all ease 0.2s;

  padding-bottom: 100%;
  width: 100%;
  height: 0;

  &:hover {
    color: white;
    background-color: map-get($global-colors, 'branding-primary');
  }
}
</style>
