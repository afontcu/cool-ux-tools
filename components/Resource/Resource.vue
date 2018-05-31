<template>
  <div class="Resource u-padding-small o-media o-media--stretch">
    <FancyLink :href="link" :title="name" class="Resource__image-link o-media__img u-flex u-flex-column u-flex-justify-center u-padding-small">
      <img :src="`/logos${image}`" :alt="name" width="150" class="Resource__image-tag">
    </FancyLink>
    <div class="o-media__body u-flex u-flex-column">
      <h3 class="Resource__title u-text-special-font u-text-h2 u-text-uppercase">
        {{ name }}
      </h3>
      <span class="u-flex-default u-margin-bottom-small">
        {{ description }}
      </span>
      <FancyLink :href="link" :title="name" class="Resource__link">
        Go to {{ name }} &rarr;
      </FancyLink>
    </div>
  </div>
</template>

<script>
import FancyLink from '@/components/FancyLink'
import descriptions from '~/data/descr.json'

export default {
  name: 'Resource',
  components: {
    FancyLink,
  },
  props: {
    category: { required: true, type: String },
    link: { required: true, type: String },
    name: { required: true, type: String },
    image: { required: true, type: String },
  },
  data () {
    return {
      descriptions,
    }
  },
  computed: {
    description () {
      return this.descriptions.find(d => d.link === this.link).description
    },
  },
}
</script>

<style lang="scss">
.Resource__image-link {
  background-color: #f1f1f2;
}
</style>
