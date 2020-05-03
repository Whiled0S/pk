<template>
  <div class="service">
    <h1 class="service__header">
      {{ header }}
    </h1>

    <div class="service__content">
      <slot />
    </div>

    <Button>Оставить заявку</Button>
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
    }
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

    &__content {
      margin-bottom: 40px;
    }
  }
</style>
