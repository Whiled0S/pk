<template>
  <div class="index">
    <index-intro />

    <index-services />

    <index-request />
  </div>
</template>

<script>
import IndexIntro from '../components/index/IndexIntro'
import IndexServices from '../components/index/IndexServices/IndexServices'
import IndexRequest from '../components/index/IndexRequest/IndexRequest'

function removeAnchor () {
  if (window.location.hash) { window.history.replaceState(null, null, '/') }
}

export default {
  components: { IndexRequest, IndexServices, IndexIntro },
  layout: 'index',
  beforeMount () {
    window.addEventListener('wheel', removeAnchor)
  },

  beforeDestroy () {
    window.removeEventListener('wheel', removeAnchor)
  }
}
</script>

<style lang="scss" scoped>
  .index {

  }
</style>
