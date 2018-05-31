<template>
  <div class="Category">
    <h1 class="Category__title u-margin-top-large u-text-center u-text-special-font">{{ category.name }} tools</h1>
    <h2 class="u-margin-bottom-huge u-text-center u-text-h3">{{ category.description }}</h2>
    <div class="Category__resources-list">
      <Resource v-for="resource in filteredResources"
                :key="resource.uri"
                :category="resource.category"
                :link="resource.link"
                :name="resource.name"
                :image="resource.image"
      />
    </div>
  </div>
</template>

<script>
import Resource from '@/components/Resource'
import { resources, categories } from '~/data/data.json'

export default {
  components: {
    Resource,
  },
  data () {
    return {
      resources,
      categories,
    }
  },
  computed: {
    url () {
      return this.$route.params.url
    },
    category () {
      return this.categories.find(c => c.url === this.url)
    },
    filteredResources () {
      return this.resources.filter(r => r.category === this.url)
    },
  },
}
</script>

<style lang="scss">
.Category__resources-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: $global-spacing-unit-large;
}

@media (min-width: 1000px) {
  .Category__resources-list {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
  }
}

.Category__title {
  font-size: 3rem;
}
</style>
