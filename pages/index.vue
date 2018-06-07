<template>
  <main>
    <div class="o-wrapper o-wrapper--large u-margin-top-huge u-padding-top u-text-center u-text-branding-primary u-text-special-font u-text-h2">
      Cool UX Tools is a curated list of (obviously) cool resources and tools for developers, UX researchers, designers and project managers.
    </div>
    <categories-grid class="u-margin-top-large u-margin-bottom-huge"/>
    <FAQ />
  </main>
</template>

<script>
import CategoriesGrid from '@/components/CategoriesGrid'
import FAQ from '@/components/FAQ'

export default {
  components: {
    CategoriesGrid,
    FAQ,
  },
}
</script>

<style>
</style>
