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

    &__dash {
      margin-right: 15px;
    }
  }
</style>
