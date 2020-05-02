<template>
  <button
    class="button"
    :class="{'button_disabled': disabled}"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    disabled: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .button {
    position: relative;
    padding: 12px 16px;
    @include f-d-button;
    background-color: $yellow;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    box-shadow: 0 0 0 0 rgba(0,123,255,.5);
    transition: box-shadow .1s;

    &_disabled {
      opacity: .5;
      pointer-events: none;
    }

    &:hover {
      background-color: #FFE441;
    }

    &:focus {
      background-color: #FFE441;
      box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);
    }
  }
</style>
