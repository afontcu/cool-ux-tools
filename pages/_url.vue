<template>
  <div>
    <h1>hola {{ url }}</h1>
    <nuxt-link v-for="r in filteredResources" :key="r.url" :to="`resource/${r.name}`">
      {{ r.name }}
    </nuxt-link>
  </div>
</template>

<script>
import { resources } from '~/data/data.json'

export default {
  data () {
    return {
      resources
    }
  },
  computed: {
    url () {
      return this.$route.params.url
    },
    filteredResources () {
      return this.resources.filter(r => r.category === this.url)
    }
  }
}
</script>

<style scoped>

</style>
