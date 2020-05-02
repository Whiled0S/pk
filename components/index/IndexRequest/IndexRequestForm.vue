<template>
  <form
    class="index-request-form"
    @submit.prevent
  >
    <div class="index-request-form__inputs">
      <request-input
        class="index-request-form__inputs-name"
        icon="person"
        placeholder="ФИО, наименование*"
      />

      <request-input
        class="index-request-form__inputs-phone"
        icon="phone"
        placeholder="Введите ваш телефон*"
      />

      <request-input
        class="index-request-form__inputs-email"
        icon="mail"
        placeholder="Введите ваш e-mail"
      />

      <request-input
        class="index-request-form__inputs-message"
        icon="text"
        placeholder="ФИО, наименование*"
        element="textarea"
        rows="5"
      />
    </div>
  </form>
</template>

<script>
import RequestInput from '../../core/RequestInput'
export default {
  name: 'IndexRequestForm',
  components: { RequestInput }
}
</script>

<style lang="scss" scoped>
  .index-request-form {
    width: 100%;

    &__inputs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-flow: row;
      grid-gap: 30px;
    }

    &__inputs-name {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }

    &__inputs-phone {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    &__inputs-email {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }

    &__inputs-message {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }
  }
</style>
