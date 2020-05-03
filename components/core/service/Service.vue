<template>
  <div class="service">
    <component :is="headerTag" class="service__header">
      {{ header }}
    </component>

    <div class="service__content">
      <slot />
    </div>

    <Button v-if="!noButton" class="service__request">
      Оставить заявку
    </Button>
  </div>
</template>

<script>
import Button from '../Button'
export default {
  name: 'Service',
  components: { Button },
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
      margin-top: 40px;
    }
  }
</style>
