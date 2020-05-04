<template>
  <nuxt-link
    v-scroll-to="'#index-request'"
    :to="{ path: '/', hash: samePage ? '' : '#index-request' }"
  >
    <Button>
      Оставить заявку
    </Button>
  </nuxt-link>
</template>

<script>
import Button from './Button'
export default {
  name: 'ButtonRequest',
  components: { Button },
  props: {
    samePage: Boolean
  },
  methods: {
    goToIndexRequest () {
      if (this.samePage) {
        this.$scrollTo('#index-request')
      } else {
        this.$router.push({
          path: '/',
          hash: 'index-request'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
