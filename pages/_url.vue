<template>
  <div class="Category">
    <div class="o-wrapper o-wrapper--large">
      <h1 class="Category__title u-margin-top-large u-text-center u-text-special-font">{{ category.name }} cool tools</h1>
      <h2 v-if="category.description" class="u-margin-bottom-huge u-text-center u-text-h3">{{ category.description }}</h2>
    </div>
    <div class="Category__resources-list u-margin-bottom-large">
      <cool-resource v-for="resource in filteredResources"
                     :key="resource.uri"
                     v-bind="resource"
      />
    </div>
    <FancyLink href="/" title="Go back to Cool UX Tools homepage">&larr; Go Back</FancyLink>
  </div>
</template>

<script>
import CoolResource from '@/components/CoolResource'
import FancyLink from '@/components/FancyLink'
import { resources } from '~/data/data.json'

export default {
  components: {
    CoolResource,
    FancyLink,
  },
  asyncData ({ route, error }) {
    const { categories } = require('~/data/data.json')
    const category = categories.find(c => c.url === route.params.url)

    if (!category) {
      error({ statusCode: 404, message: 'Resource not found' })
    }

    return { category }
  },
  data () {
    return {
      resources,
    }
  },
  computed: {
    url () {
      return this.$route.params.url
    },
    filteredResources () {
      return this.resources.filter(r => r.category === this.url)
    },
  },
}
</script>

<style lang="scss">
.Category__resources-list {
  --columns: 1;

  @media screen and (min-width: $medium-breakpoint) {
    --columns: 2;
  }

  display: grid;
  grid-gap: $global-spacing-unit-large;
  grid-template-columns: repeat(var(--columns), 1fr);
}

.Category__title {
  font-size: 3rem;
}
</style>
