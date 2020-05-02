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
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 35px 21px 24px;
    border: 3px solid $dark-blue;
    box-sizing: border-box;
    border-radius: 10px;
    text-align: left;
    color: $dark-blue;
    cursor: pointer;
    transition: background-color .2s;

    $index-services-card: &;

    svg {
      fill: $dark-blue;
      transition: fill .3s;
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

      #{$index-services-card}__text {
        justify-content: center;
      }
    }

    &__icon {
      margin-bottom: 15px;
      height: 62px;
      width: 100%;
    }

    &__text {
      flex-grow: 1;
      display: flex;
      align-items: center;
      @include f-d-text;
    }
  }
</style>
