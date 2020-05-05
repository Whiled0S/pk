<template>
  <div class="index-services-card-list">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'IndexServicesCardList'
}
</script>

<style lang="scss" scoped>
  .index-services-card-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 30px;
    box-sizing: border-box;

    @include respond-to($tablet) {
      grid-gap: 10px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
