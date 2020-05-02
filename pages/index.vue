<template>
  <div class="index">
    <index-intro />

    <index-services />
  </div>
</template>

<script>
import IndexIntro from '../components/index/IndexIntro'
import IndexServices from '../components/index/IndexServices/IndexServices'
export default {
  components: { IndexServices, IndexIntro },
  layout: 'index'
}
</script>

<style lang="scss" scoped>
  .index {

  }
</style>
