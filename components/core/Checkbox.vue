<template>
  <label class="checkbox__container">
    <input
      class="checkbox"
      type="checkbox"
      v-bind="$attrs"
      v-on="listeners"
    >

    <span class="checkbox__checker">
      <svg-icon width="18" height="18" name="check" />
    </span>

    <slot />
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  inheritAttrs: false,
  model: {
    prop: 'checked'
  },
  computed: {
    listeners () {
      return Object.assign({},
        this.$listeners,
        {
          input: (event) => {
            this.$emit('input', event.target.checked)
          }
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
  .checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked + &__checker {
      background-color: $white;

      svg {
        opacity: 1;
      }
    }

    &__container {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }

    &__checker {
      width: 18px;
      height: 18px;
      background-color: transparent;
      border: 1px solid $white;
      border-radius: 3px;
      margin-right: 15px;
      transition: background-color .2s;

      @include respond-to($tablet) {
        width: 14px;
        height: 14px;
        margin-right: 6px;

        svg {
          width: 14px;
          height: 14px;
        }
      }

      svg {
        opacity: 0;
        transition: opacity .2s;
      }
    }
  }
</style>
