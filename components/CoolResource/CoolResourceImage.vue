<template>
  <vue-clazy-load :src="src">
    <transition name="fade">
      <img :src="src" :alt="alt" class="Cool-resource-image">
    </transition>
    <transition slot="placeholder" name="fade">
      <div class="Cool-resource-image__placeholder"/>
    </transition>
  </vue-clazy-load>
</template>

<script>
import { VueClazyLoad } from 'vue-clazy-load'

export default {
  name: 'CoolResourceImage',
  components: {
    VueClazyLoad,
  },
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
  },
}
</script>

<style lang="scss">
$image-size: 150px;

.Cool-resource-image {
  width: calc(75px + 1vw);
  transition: transform $global-transition ease;
  border-radius: $global-radius;

  &:hover {
    transform: rotate3d(0, 0, 1, -2deg) scale(1.1);
  }
}

@media screen and (min-width: $small-breakpoint) {
  .Cool-resource-image {
    width: $image-size;
  }
}

.Cool-resource-image__placeholder {
  width: $image-size;
  height: $image-size;
  background-color: #f1f1f2;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: rotate3d(0, 0, 1, 2deg) scale(0.9);
}
</style>
