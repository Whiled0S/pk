<template>
  <footer class="footer">
    <container>
      <navbar bottom />
    </container>
  </footer>
</template>

<script>
import Navbar from '../Navbar'
import Container from '../Container'
export default {
  name: 'Footer',
  components: { Container, Navbar }
}
</script>

<style lang="scss" scoped>
  .footer {
    padding: 40px 0 50px;
    background: linear-gradient(180deg, rgba(77, 77, 153, 0) 0%, #4D4D97 100%);
    color: $white;
  }
</style>
