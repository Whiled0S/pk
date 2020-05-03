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
        placeholder="Введите сообщение"
        element="textarea"
        rows="5"
      />
    </div>

    <Checkbox class="index-request-form__agreement">
      <p>
        Настоящим даю свое согласие на обработку персональных данных в соответствии с<br>
        <a target="_blank" href="/">Политикой конфиденциальности и обработки персональных данных.</a>
      </p>
    </Checkbox>

    <Button class="index-request-form__submit" disabled>
      Отправить
    </Button>
  </form>
</template>

<script>
import RequestInput from '../../core/RequestInput'
import Checkbox from '../../core/Checkbox'
import Button from '../../core/Button'
export default {
  name: 'IndexRequestForm',
  components: { Button, Checkbox, RequestInput }
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
      margin-bottom: 25px;
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

    &__agreement {
      @include f-d-checkbox;
      color: $white;
      margin-bottom: 40px;

      a {
        color: $white;
        transition: color .2s;

        &:hover {
          color: $light-blue;
        }
      }
    }

    &__submit {
      width: 160px;
    }
  }
</style>
