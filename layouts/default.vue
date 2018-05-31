<template>
  <div class="Layout Layout--default">
    <header class="Layout__header u-padding-bottom-large">
      <div class="o-wrapper u-flex u-flex-items-center u-padding u-margin-bottom-large">
        <nuxt-link to="/" class="Logo u-text-light">
          <span class="u-text-special-font">UX</span>
          <span class="u-text-normal">stack</span>
        </nuxt-link>
        <div class="Header__tagline u-text-branding-primary-muted u-text-right u-margin-left-auto u-text-special-font u-text-h4">
          UX Stack is a curated list of cool resources and tools for developers, UX researchers, designers and project managers.
        </div>
      </div>
      <svg class="Layout__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
        <polygon fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
      </svg>
    </header>
    <nuxt class="o-wrapper u-margin-bottom-huge u-padding-bottom-huge" />
    <footer class="Footer Layout__footer">
      <svg class="Layout__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#444" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
        <polygon fill="#444" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
      </svg>
      <div class="Footer__wrapper o-wrapper u-flex u-padding-vertical-large">
        Made with 💚 by&nbsp;<FancyLink target="_blank" href="https://twitter.com/afontcu_" title="Twitter">@afontcu_</FancyLink>
        <div class="u-margin-left-auto">
          Feel free to report issues or ideas on <FancyLink target="_blank" href="https://github.com/afontcu/uxstack" title="Github">Github &rarr;</FancyLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import FancyLink from '@/components/FancyLink'

export default {
  components: {
    FancyLink,
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
  position: relative;

  background-color: map-get($global-colors, 'branding-primary');
  color: white;
}

.Layout__svg {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
}

.Layout__footer {
  position: relative;
  color: #f1f1f2;
  background-color: #444;

  .Layout__svg {
    bottom: inherit;
    top: -100px;
  }
}

.Footer__wrapper {

  background-color: #444;
}

.Header__tagline {
  max-width: 490px;
}

.Logo {
  font-size: 4rem;
}
</style>
