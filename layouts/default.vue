<template>
  <div class="Layout Layout--default">
    <header class="Layout__header">
      <div class="o-wrapper u-padding u-margin-bottom">
        <nuxt-link to="/" class="u-text-light u-text-h3">
          <img src="~assets/logo.png" alt="UX Stack" width="200">
        </nuxt-link>
        <div>
          UX Stack is a curated list with the best UX tools to research, design and manage your UX projects.
        </div>
      </div>
    </header>
    <nuxt class="o-wrapper u-margin-bottom-huge" />
    <footer class="Layout__footer u-padding">
      <div class="o-wrapper">
        Made with 💚 by <FancyLink href="https://twitter.com/afontcu_" title="Twitter">@afontcu_</FancyLink> ·
        <FancyLink href="https://github.com/afontcu/uxstack" title="Github">Github</FancyLink>
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
  background-color: map-get($global-colors, 'branding-primary');
  color: white;
}

.Layout__footer {
  background-color: #f1f1f2;
}
</style>
