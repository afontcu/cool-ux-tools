<template>
  <div class="Categories-grid u-flex u-flex-wrap u-flex-justify-between">
    <nuxt-link v-for="category in categories"
               :key="category.name"
               :to="category.url"
               class="Categories-grid__item u-flex-auto u-text-center u-margin-small"
    >
      <div class="u-padding">
        {{ category.name }}
      </div>

    </nuxt-link>
  </div>
</template>

<script>
import { categories } from '~/data/data.json'

export default {
  name: 'CategoriesGrid',
  data () {
    return {
      categories,
    }
  },
}
</script>

<style lang="scss">
.Categories-grid {
  flex-direction: column;
  margin: $global-spacing-unit-large 0 $global-spacing-unit-huge;
}

@media screen and (min-width: $small-breakpoint) {
  .Categories-grid {
    flex-direction: row;
  }
}

.Categories-grid__item {
  position: relative;
  top: 0;

  transition: all ease 0.1s;
  font-size: calc(1rem + 0.5vw);
  background-color: $color-branding-primary;
  border-radius: $global-radius;
  box-shadow: 0 6px $color-branding-primary-accent;
  color: white;

  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    transition: all ease $global-transition;
    border-top-left-radius: $global-radius;
    border-top-right-radius: $global-radius;
  }

  &:hover {
    z-index: 1;
    top: 2px;
    color: white;
    box-shadow: 0 4px $color-branding-primary-accent;

    &::after {
      height: 100%;
    }
  }

  &:active {
    top: 6px;
    box-shadow: none;
  }
}
</style>
