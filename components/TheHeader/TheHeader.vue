<template>
  <header :style="headerStyle" class="Header">
    <div class="Logo o-wrapper u-text-branding-primary">
      <nuxt-link to="/" class="Logo__link u-flex u-padding-top-small">
        <span class="Logo__text Logo__text--cool u-text-special-font">cool</span>
        <span class="Logo__text u-text-hairline u-padding-horizontal-tiny">UX</span>
        <span class="Logo__text Logo__text--tools u-text-special-font">tools</span>
      </nuxt-link>
      <div class="Tagline u-text-h4">
        A curated list of (obviously) cool resources and tools for developers, UX researchers, designers and project managers.
      </div>
    </div>
    <triangles :height="height" class="Header__triangles u-padding-top-huge">
      <svg class="Header__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="0,76 21,100 33,60 45,100 50,75 55,100 72,70 85,100 95,62 100,80 100,100 0,100" />
      </svg>
    </triangles>
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
      height: 350,
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
@media screen and (min-width: $small-breakpoint) {
  .Header {
    margin-top: $global-spacing-unit-large;
  }
}

.Tagline {
  color: white;
  text-align: center;
  padding-top: $global-spacing-unit;
}

.Logo {
  position: relative;
  z-index: 1;
}

.Logo__link {
  flex-wrap: wrap;
  justify-content: center;
  margin-top: $global-spacing-unit-small;
  margin-left: $global-spacing-unit;
}

.Logo__text {
  color: white;
  font-size: calc(5rem + 0.8vw);
  transform: rotate3d(0, 0, 1, -1deg);
  line-height: 1;
}

.Logo__text--cool {
  padding-top: $global-spacing-unit;
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
    justify-items: start;
    align-items: center;
  }

  .Logo__text--cool,
  .Logo__text--tools, {
    padding-top: $global-spacing-unit;
  }
}
</style>
