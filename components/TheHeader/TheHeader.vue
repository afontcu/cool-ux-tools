<template>
  <header :style="headerStyle" class="Header u-flex u-flex-items-center">
    <div class="Header__item Logo o-wrapper u-text-branding-primary">
      <nuxt-link to="/" class="Logo__link u-flex u-padding-top-small">
        <span class="Logo__text Logo__text--cool u-text-special-font">cool</span>
        <span class="Logo__text u-text-hairline u-padding-horizontal-tiny">UX</span>
        <span class="Logo__text Logo__text--tools u-text-special-font">tools</span>
      </nuxt-link>
      <div class="Tagline">
        A curated list of (obviously) cool resources and tools for developers, UX researchers, designers and project managers.
      </div>
    </div>
    <triangles :height="height" class="Header__triangles"/>
  </header>
</template>

<script>
import Triangles from '@/components/Triangles'

export default {
  name: 'TheHeader',
  components: {
    Triangles,
  },
  data () {
    return {
      height: 370,
    }
  },
  computed: {
    headerStyle () {
      return {
        height: this.height + 'px',
      }
    },
  },
}
</script>

<style lang="scss">
.Header {
  padding: $global-spacing-unit-small 0;
}

.Tagline {
  padding-top: $global-spacing-unit;
  color: white;
  text-align: center;
  @include font-size(map-get($global-font-sizes, "h4"));
}

.Logo {
  position: relative;
  z-index: 1;
}

.Logo__link {
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 $global-spacing-unit;
}

.Logo__text {
  color: white;
  font-size: calc(5rem + 0.8vw);
  transform: rotate3d(0, 0, 1, -1deg);
  line-height: 1;
}

.Logo__text--cool {
  padding-top: $global-spacing-unit-small;
}

.Logo__text--cool,
.Logo__text--tools, {
  font-size: calc(4rem + 0.8vw);
  transform: rotate3d(0, 0, 1, -4deg);
}

.Header__svg {
  position: absolute;
  display: none;
}

.Header__triangles {
  position: absolute;
  top: 0;
}

@media screen and (min-width: $small-breakpoint) {
  .Tagline {
    text-align: inherit;
  }

  .Header__svg {
    display: inherit;
  }

  .Logo__link {
    flex-direction: inherit;
    margin: inherit;
  }

  .Logo {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    grid-gap: $global-spacing-unit;
    align-items: center;
  }

  .Logo__text--cool {
    padding-top: $global-spacing-unit;
  }

  .Logo__text--tools, {
    padding-top: $global-spacing-unit-small;
  }
}

@media screen and (min-width: $medium-breakpoint) {
  .Header__item {
    margin-bottom: $global-spacing-unit-small; // centered, but not so much
  }

  .Tagline {
    padding-right: $global-spacing-unit-small;
    @include font-size(map-get($global-font-sizes, "h3"));
  }

  .Logo__link {
    margin: 0;
  }
}
</style>
