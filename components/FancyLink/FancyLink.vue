<template>
  <a :href="href" :title="title" class="FancyLink">
    <slot>{{ title }}</slot>
  </a>
</template>

<script>
export default {
  name: 'FancyLink',
  props: {
    href: { required: true, type: String },
    title: { required: true, type: String },
  },
  data () {
    return {}
  },
}
</script>

<style lang="scss">
.FancyLink {
  position: relative;

  color: map-get($global-colors, 'branding-primary');
  transition: color $global-transition ease;

  &:hover {
    color: #aaa;

    &::before {
      width: 100%;
      left: 0;
    }

  }

  &::before {
    content: "";
    position: absolute;
    top: calc(100% + 1px);
    width: 0;
    right: 0;
    height: 3px;
  }

  &::before {
    transition: width 0.3s cubic-bezier(0.53, 0.02, 0.52, 0.99) 0.1s;
    background: map-get($global-colors, 'branding-primary');
  }
}

// Fixes double tap issue with iOS, where first click would only trigger the animation,
// and a second click was required to actually "click" the link. FML.
@media (hover: none) {
  .FancyLink::before {
    display: none;
  }
}
</style>
