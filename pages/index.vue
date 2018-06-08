<template>
  <main>
    <categories-grid />
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
