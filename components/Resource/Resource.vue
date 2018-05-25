<template>
  <div class="Resource u-padding-small o-media o-media--stretch">
    <a :href="link" :title="name" class="Resource__image-link o-media__img u-flex u-flex-column u-flex-justify-center u-padding-small">
      <img :src="`/logos${image}`" :alt="name" width="150" class="Resource__image-tag">
    </a>
    <div class="o-media__body">
      <h3 class="Resource__title u-text-h4 u-text-uppercase u-text-light">
        {{ name }}
      </h3>
      <a :href="link" :title="name" class="Resource__link">
        Go to {{ name }} &rarr;
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resource',
  props: {
    category: { required: true, type: String },
    link: { required: true, type: String },
    name: { required: true, type: String },
    image: { required: true, type: String },
    uri: { required: true, type: String },
    description: { required: true, type: String },
  },
  data () {
    return {}
  },
}
</script>

<style lang="scss">
.Resource__image-link {
  background-color: #f1f1f2;
}
</style>
