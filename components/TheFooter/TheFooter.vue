<template>
  <footer class="Footer">
    <div class="Footer__wrapper o-wrapper u-flex u-padding-vertical-large u-text-h4 u-text-thin">
      <div class="Footer__line u-margin-bottom-small">
        Made with 💚 by&nbsp;<fancy-link target="_blank" href="https://twitter.com/afontcu_" title="My Twitter" rel="noopener" >@afontcu_</fancy-link>
      </div>
      <div class="Footer__line u-margin-bottom-small">
        Feel free to report issues or 🆒 ideas on <fancy-link target="_blank" href="https://github.com/afontcu/cool-ux-tools" title="Github repository" rel="noopener">Github &rarr;</fancy-link>
      </div>
    </div>
  </footer>
</template>

<script>
import FancyLink from '@/components/FancyLink'

export default {
  name: 'TheFooter',
  components: {
    FancyLink,
  },
  data () {
    return {}
  },
}
</script>

<style lang="scss">
.Footer {
  position: relative;
  color: #fff;
}

.Footer,
.Footer__wrapper {
  background-color: #2f2f2f;
}

.Footer__wrapper {
  flex-direction: column;
  justify-content: center;
}

@media screen and (min-width: $small-breakpoint) {
  .Footer__wrapper {
    flex-direction: row;
  }

  .Footer__line + .Footer__line::before {
    content: " · ";
    padding: 0 $global-spacing-unit;
  }
}
</style>
