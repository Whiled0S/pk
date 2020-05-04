<template>
  <div class="service">
    <component :is="headerTag" class="service__header">
      {{ header }}
    </component>

    <div class="service__content">
      <slot />
    </div>

    <ButtonRequest v-if="!noButton" class="service__request">
      Оставить заявку
    </ButtonRequest>
  </div>
</template>

<script>
import ButtonRequest from '../ButtonRequest'
export default {
  name: 'Service',
  components: { ButtonRequest },
  props: {
    header: {
      type: String,
      default: 'Услуга'
    },
    headerTag: {
      type: String,
      default: 'h1'
    },
    noButton: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .service {

    &__header {
      margin-bottom: 30px;
      @include f-d-h1;
      color: $dark-blue;
    }

    &__request {
      display: inline-block;
      margin-top: 40px;
    }
  }
</style>
