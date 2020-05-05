<template>
  <li class="list-item">
    <img
      class="list-item__dash"
      src="../../../assets/images/dash.svg?data"
      alt="dash"
    >

    <span v-html="content" />
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    content: {
      type: String,
      default: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    @include f-d-text;
    color: $black;

    @include respond-to($tablet) {
      @include f-m-text;
    }

    &__dash {
      margin-right: 15px;

      @include respond-to($tablet) {
        width: 10px;
        margin-right: 10px;
      }
    }
  }
</style>
