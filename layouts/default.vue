<template>
  <div class="Layout Layout--default">
    <header class="Layout__header">
      <div class="o-wrapper u-padding u-margin-bottom">
        <nuxt-link to="/" class="u-text-light u-text-h3">
          <img src="~assets/logo.png" alt="UX Stack" width="200">
        </nuxt-link>
        <div>
          UX Stack is a curated list with the best UX tools to research, design, manage and comunicate your UX projects.
        </div>
      </div>
    </header>
    <nuxt class="o-wrapper" />
    <footer class="o-wrapper">
      Made with love by <a href="https://twitter.com/afontcu_">@afontcu_</a> · <a href="https://github.com/afontcu/uxstack" name="Github">Github</a>
    </footer>
  </div>
</template>

<style lang="scss">
@import "~assets/main";

h1, h2, h3, h4, h5, h6 {
  font-weight: 300;
}

a {
  position: relative;
  text-decoration: none;
  color: inherit;
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
</style>
