<template>
  <p class="u-flex u-flex-center u-text-h1 u-margin-top-large u-text-special-font">
    Daaaaamn! Sorry about this {{ error.statusCode }} error.
  </p>
</template>

<script>
export default {
  props: {
    error: { type: Object, required: true },
  },
}
</script>
