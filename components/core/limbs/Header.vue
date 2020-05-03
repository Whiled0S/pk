<template>
  <header
    class="header"
    :class="{ 'header_white': white }"
  >
    <container>
      <navbar :main="main" />
    </container>
  </header>
</template>

<script>
import Container from '../Container'
import Navbar from '../Navbar'
export default {
  name: 'Header',
  components: { Navbar, Container },
  props: {
    white: Boolean,
    main: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .header {
    padding: 20px 0;
    background: linear-gradient(180deg, #4D4D99 0%, rgba(77, 77, 153, 0.4) 22.73%, rgba(77, 77, 153, 0) 100%);
    color: $white;
    z-index: 1;

    &_white {
      color: $black;
      background: transparent;
    }
  }
</style>
