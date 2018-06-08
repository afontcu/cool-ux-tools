<template>
  <vue-clazy-load :src="src" class="CoolImage">
    <transition name="fade">
      <img :src="src" :alt="alt" class="CoolImage__img">
    </transition>
    <transition slot="placeholder" name="fade">
      <div class="CoolImage__placeholder"/>
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
.CoolImage {
  --image-size: 75px;
}
@media screen and (min-width: $small-breakpoint) {
  .CoolImage {
    --image-size: 150px;
  }
}

.CoolImage__img {
  width: calc(var(--image-size) + 1vw);
  transition: transform $global-transition ease;
  border-radius: $global-radius;

  &:hover {
    transform: rotate3d(0, 0, 1, -2deg) scale(1.1);
  }
}

.CoolImage__placeholder {
  width: var(--image-size);
  height: var(--image-size);
  background-color: #f1f1f2;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: rotate3d(0, 0, 1, 2deg) scale(0.9);
}
</style>
