<!--suppress CssInvalidPropertyValue -->
<template>
  <div
    class="index-services-card"
    :class="{'index-services-card_centered': textCenter}"
  >
    <svg-icon class="index-services-card__icon" :name="icon" />

    <span class="index-services-card__text">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: 'IndexServicesCard',
  props: {
    icon: {
      type: String,
      default: String
    },
    textCenter: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .index-services-card {
    width: 100%;
    padding: 35px 21px 24px;
    border: 3px solid $dark-blue;
    box-sizing: border-box;
    border-radius: 10px;
    text-align: left;
    color: $dark-blue;
    cursor: pointer;

    svg {
      fill: $dark-blue;
    }

    &:hover {
      color: $white;
      background-color: $dark-blue;

      svg {
        fill: $white !important;
      }
    }

    &_centered {
      text-align: center;
    }

    &__icon {
      margin-bottom: 15px;
      height: 62px;
      width: 100%;
    }

    &__text {
      @include f-d-text;
    }
  }
</style>
