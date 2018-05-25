<template>
  <div>
    <h1>{{ category.name }}</h1>
    <h2 class="u-margin-bottom u-text-h3">{{ category.description }} </h2>
    <div class="Resources-grid">
      <Resource v-for="resource in filteredResources"
                :key="resource.uri"
                v-bind="resource" />
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
.Resources-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: $global-spacing-unit;
}
</style>
