<template>
  <div class="Layout Layout--default">
    <header class="Layout__header u-padding-bottom-large">
      <nuxt-link to="/" class="Logo u-text-branding-primary u-flex u-flex-center u-text-light">
        <span class="Logo__small u-text-special-font">cool</span>
        <span class="u-text-hairline u-padding-horizontal-tiny">UX</span>
        <span class="Logo__small u-text-special-font u-padding-top-large">tools</span>
      </nuxt-link>
      <Triangles class="Layout__triangles u-padding-top-large">
        <svg class="Layout__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="white" points="0,76 21,100 33,60 45,100 50,75 55,100 72,70 85,100 95,62 100,80 100,100 0,100" />
        </svg>
      </Triangles>
      <div class="o-wrapper o-wrapper--huge Header__tagline u-margin-top-huge u-padding-top u-text-center u-text-branding-primary u-text-special-font u-text-h2">
        Cool UX Tools is a curated list of (obviously) cool resources and tools for developers, UX researchers, designers and project managers.
      </div>
    </header>
    <nuxt class="Layout__main o-wrapper u-margin-bottom-huge u-padding-bottom-huge" />
    <footer class="Footer Layout__footer">
      <!-- <svg class="Layout__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#444" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
        <polygon fill="#444" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
      </svg> -->
      <div class="Footer__wrapper o-wrapper u-flex u-padding-vertical-large">
        <div>
          Made with 💚 by&nbsp;<FancyLink target="_blank" href="https://twitter.com/afontcu_" title="Twitter">@afontcu_</FancyLink>
        </div>
        <div class="u-margin-left-auto">
          Feel free to report issues or 🆒 ideas on <FancyLink target="_blank" href="https://github.com/afontcu/cool-ux-tools" title="Github">Github &rarr;</FancyLink>
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

  color: white;
  font-size: 5rem;
  transform: rotate3d(0, 0, 1, -5deg);
}

.Logo__small {
  font-size: 4rem;
}

.Layout__triangles {
  position: absolute;
  top: 0;
}
</style>
