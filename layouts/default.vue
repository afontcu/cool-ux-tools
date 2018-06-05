<template>
  <div class="Layout Layout--default">
    <header class="Layout__header u-padding-bottom-large">
      <div class="Logo u-text-branding-primary u-flex u-flex-center">
        <nuxt-link to="/" class="u-flex u-padding-top-small">
          <span class="Logo__text Logo__text--small u-text-special-font u-padding-top">cool</span>
          <span class="Logo__text u-text-hairline u-padding-horizontal-tiny">UX</span>
          <span class="Logo__text Logo__text--small u-text-special-font u-padding-top">tools</span>
        </nuxt-link>
      </div>
      <triangles class="Layout__triangles u-padding-top-large">
        <svg class="Layout__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="white" points="0,76 21,100 33,60 45,100 50,75 55,100 72,70 85,100 95,62 100,80 100,100 0,100" />
        </svg>
      </triangles>
      <div class="o-wrapper o-wrapper--huge u-margin-top-huge u-padding-top u-text-center u-text-branding-primary u-text-special-font u-text-h3">
        Cool UX Tools is a curated list of (obviously) cool resources and tools for developers, UX researchers, designers and project managers.
      </div>
    </header>
    <nuxt class="Layout__main o-wrapper u-margin-bottom-huge" />
    <footer class="Footer Layout__footer">
      <div class="Footer__wrapper o-wrapper u-flex u-padding-vertical-large">
        <div>
          Made with 💚 by&nbsp;<fancy-link target="_blank" href="https://twitter.com/afontcu_" title="My Twitter">@afontcu_</fancy-link>
        </div>
        <div class="u-margin-left-auto">
          Feel free to report issues or 🆒 ideas on <fancy-link target="_blank" href="https://github.com/afontcu/cool-ux-tools" title="Github repository">Github &rarr;</fancy-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import FancyLink from '@/components/FancyLink'
import Triangles from '@/components/Triangles'

export default {
  components: {
    FancyLink,
    Triangles,
  },
}
</script>

<style lang="scss">
@import "~assets/main";

h1, h2, h3, h4, h5, h6 {
  font-weight: 300;
}

a {
  text-decoration: none;
  color: inherit;
}

html, body {
  min-height: 100vh;
}

.Layout {
  font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2f2f2f;
}

.Layout__header {
  overflow: hidden;
}

.Layout__svg {
  position: absolute;
  bottom: 0;
  height: 100px;
}

.Layout__footer {
  position: relative;
  color: #f1f1f2;
  background-color: #444;
}

.Footer__wrapper {
  background-color: #444;
}

.Logo {
  position: relative;
  z-index: 1;
}

.Logo__text {
  color: white;
  font-size: 5rem;
  transform: rotate3d(0, 0, 1, -1deg);
}

.Logo__text--small {
  font-size: 4rem;
  transform: rotate3d(0, 0, 1, -4deg);
}

.Layout__triangles {
  position: absolute;
  top: 0;
}
</style>
