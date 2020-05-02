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
export default {
  components: { IndexRequest, IndexServices, IndexIntro },
  layout: 'index'
}
</script>

<style lang="scss" scoped>
  .index {

  }
</style>
