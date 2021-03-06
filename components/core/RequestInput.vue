<template>
  <label class="request-input__label">
    <textarea
      v-if="textarea"
      class="request-input"
      v-bind="$attrs"
      v-on="listeners"
    />

    <input
      v-else
      v-mask="{ mask: mask, showMaskOnHover: false }"
      class="request-input"
      :class="{ 'request-input_invalid': error }"
      v-bind="$attrs"
      v-on="listeners"
    >

    <svg-icon width="22" height="22" :name="icon" />
  </label>
</template>

<script>
export default {
  name: 'RequestInput',
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      default: String
    },
    error: {
      type: [String, null],
      default: null
    },
    mask: {
      type: String,
      default: String
    },
    textarea: Boolean
  },
  computed: {
    listeners () {
      return Object.assign({},
        this.$listeners,
        {
          input: (event) => {
            this.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
  .request-input {
    display: inline-block;
    width: 100%;
    min-height: 50px;
    padding: 11px 11px 11px 45px;
    @include f-d-input;
    outline: none;
    border: 1px solid $blue;
    border-radius: 5px;
    background-color: $blue;
    color: $white;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, .5);
    transition: box-shadow .2s, border-color .2s;
    resize: vertical;
    box-sizing: border-box;
    -webkit-appearance: none;

    &[disabled] {
      background-color: rgba(255, 255, 255, .2);
      cursor: not-allowed;
    }

    &_invalid {
      border: 1px solid #e74c3c;
      box-shadow: 0 0 0 2px rgba(#e74c3c, .5);
    }

    @include respond-to($tablet) {
      min-height: 40px;
      padding: 11px 11px 11px 37px;
      @include f-m-input;
    }

    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: $light-blue;
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: $light-blue;
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: $light-blue;
    }

    &:focus {
      border: 1px solid #FFFFFF;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, .5);
    }

    &__label {
      position: relative;
      width: 100%;
      display: inline-block;

      svg {
        position: absolute;
        top: 14px;
        left: 14px;

        @include respond-to($tablet) {
          top: 12px;
          left: 12px;
          width: 16px;
          height: 16px;
        }
      }
    }
  }
</style>
