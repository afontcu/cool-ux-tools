<template>
  <div class="Layout Layout--default">
    <header class="Layout__header u-padding-bottom-large">
      <div class="o-wrapper u-padding u-margin-bottom-large">
        <nuxt-link to="/" class="u-text-light u-text-h3">
          <img src="~assets/logo.png" alt="UX Stack" width="200" class="u-margin-bottom">
        </nuxt-link>
        <div class="u-text-h5">
          UX Stack is a curated list of cool resources and tools for developers, UX researchers, designers and project managers.
        </div>
      </div>
      <svg class="Layout__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
        <polygon fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
      </svg>
    </header>
    <nuxt class="o-wrapper u-margin-bottom-huge" />
    <footer class="Layout__footer u-padding">
      <div class="o-wrapper u-flex">
        Made with 💚 by&nbsp;<FancyLink href="https://twitter.com/afontcu_" title="Twitter">@afontcu_</FancyLink>
        <div class="u-margin-left-auto">
          You can report bugs on <FancyLink href="https://github.com/afontcu/uxstack" title="Github">Github &rarr;</FancyLink>
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
  color: #444;
  background-color: #f1f1f2;
}
</style>
