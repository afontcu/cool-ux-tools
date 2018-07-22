<template>
  <div :class="[ classes ]" class="Cool-resource u-padding-small o-media o-media--top">
    <a :href="link"
       :title="name"
       target="_blank"
       rel="noopener"
       class="Cool-resource__image-link o-media__img u-flex u-flex-column u-flex-justify-center u-padding-bottom">
      <cool-resource-image :src="imageSrc" :alt="name" />
    </a>
    <div class="o-media__body u-flex u-flex-column">
      <h3 class="u-text-special-font u-text-h2 u-text-uppercase">
        {{ name }}
      </h3>
      <span v-if="description" class="u-flex-default u-margin-bottom-small">
        {{ description }}
      </span>
      <fancy-link :href="link" :title="name" target="_blank" rel="noopener">
        Go to {{ name }} &rarr;
      </fancy-link>
    </div>
  </div>
</template>

<script>
import FancyLink from '@/components/FancyLink'
import CoolResourceImage from './CoolResourceImage'

export default {
  name: 'CoolResource',
  components: {
    FancyLink,
    CoolResourceImage,
  },
  props: {
    category: { required: true, type: String },
    link: { required: true, type: String },
    name: { required: true, type: String },
    image: { required: true, type: String },
    description: { required: true, type: String },
  },
  computed: {
    imageSrc () {
      return `/logos${this.image}`
    },
    classes () {
      const className = this.name.toLowerCase().replace(/[\W_]+/g, '')
      return [`Resource--${className}`]
    },
  },
}
</script>
