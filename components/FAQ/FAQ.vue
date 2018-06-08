<template>
  <div class="Faq">
    <div class="u-text-h1 u-text-special-font">FAQs</div>
    <h3 class="u-text-special-font u-text-h4">
      why did you do this?
    </h3>
    <p class="u-margin-bottom-large">
      Why not? There's a lot of cool resources out there and I needed a place to gather them. I had my own Google Sheet file, and I wanted
      to share it in a comfortable way. So here we are.
    </p>
    <h3 class="u-text-special-font u-text-h4">
      aren't you a frontend engineer?
    </h3>
    <p class="u-margin-bottom-large">
      Yes I am! But lines are blurry and sometimes I need to step into the realm of UX, for which I feel myself more insufficient.
      This is why I explored a lot of tools, to understand what were trying to solve and why.
      <br><br>
      btw, I like how
      <fancy-link target="_blank" rel="noopener" title="Differences between UX designer and UI developer" href="https://asinthecity.com/2011/11/10/the-difference-between-a-ux-designer-and-ui-developer/">
        this picture from Ben Melbourne
      </fancy-link>
      (the second one, obviously) articulates the difference between UX, design, frontend and so on. And I like
      doing the right things right, so research and design is critical. And "UI Developer" sounds cool, so ¯\_(ツ)_/¯
    </p>
    <h3 class="u-text-special-font u-text-h4">
      my tool/resource/whatever isn't listed and it's cooler than you
    </h3>
    <p class="u-margin-bottom-large">
      Yeap, that's possible. Sorry to hear. I listed the tools I knew and I liked, so if yours isn't there, it's probably because
      (1) I didn't know about it or (2) other tools were cooler than yours. But I'm almost always wrong, so it must be reason #1.
      Please let me know on
      <fancy-link target="_blank" rel="noopener" title="My Twitter" href="https://twitter.com/afontcu_">Twitter</fancy-link>
      or
      <fancy-link target="_blank" rel="noopener" title="Github repository" href="https://github.com/afontcu/cool-ux-tools">Github</fancy-link>.
    </p>
  </div>
</template>

<script>
import FancyLink from '@/components/FancyLink'

export default {
  name: 'FAQ',
  components: {
    FancyLink,
  },
  data () {
    return {}
  },
}
</script>

<style lang="scss">

.Faq {
  --padding: #{$global-spacing-unit};

  @media screen and (min-width: $medium-breakpoint) {
    --padding: #{$global-spacing-unit-huge};
  }

  padding-left: var(--padding);
  padding-right: var(--padding);
}
</style>
