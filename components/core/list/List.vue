<template>
  <ul class="list">
    <list-item
      v-for="(item, idx) in items"
      :key="idx"
      :content="item"
      class="list__item"
    />
  </ul>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'List',
  components: { ListItem },
  props: {
    items: {
      type: Array,
      default: Array
    }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    width: 100%;
    display: flex;
    flex-direction: column;

    &__item:not(:last-child) {
      margin-bottom: 25px;
    }
  }
</style>
