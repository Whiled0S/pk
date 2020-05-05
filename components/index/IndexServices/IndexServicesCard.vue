<!--suppress CssInvalidPropertyValue -->
<template>
  <nuxt-link
    class="index-services-card"
    :class="{
      'index-services-card_centered': textCenter,
      'index-services-card_no-mobile-icon': noMobileIcon
    }"
    :to="to"
  >
    <svg-icon class="index-services-card__icon" :name="icon" />

    <span class="index-services-card__text">
      <slot />
    </span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'IndexServicesCard',
  props: {
    icon: {
      type: String,
      default: String
    },
    to: {
      type: String,
      default: () => '/'
    },
    textCenter: Boolean,
    noMobileIcon: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .index-services-card {
    display: flex;
    flex-direction: column;
    padding: 35px 21px 24px;
    border: 3px solid $dark-blue;
    box-sizing: border-box;
    border-radius: 10px;
    text-align: left;
    text-decoration: none;
    color: $dark-blue;
    cursor: pointer;
    transition: background-color .2s;

    @include respond-to($tablet) {
      padding: 28px 22px 28px 38px;
      border-width: 2px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

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

    &__icon {
      margin-bottom: 15px;
      height: 62px;
      width: 100%;

      @include respond-to($tablet) {
        margin-bottom: 0;
        height: 57px;
        width: auto;
      }
    }

    &__text {
      display: flex;
      align-items: center;
      @include f-d-text;
      box-sizing: border-box;

      @include respond-to($tablet) {
        @include f-m-text;
      }
    }

    &_centered {
      text-align: center;

      #{$index-services-card}__text {
        justify-content: center;

        @include respond-to($tablet) {
          text-align: left;
        }
      }
    }

    &_no-mobile-icon {

      @include respond-to($tablet) {
        height: 100px;
        padding: 0 15px;

        #{$index-services-card}__icon {
            display: none;
        }

        #{$index-services-card}__text {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
</style>
