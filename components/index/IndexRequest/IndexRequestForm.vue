<template>
  <promised
    #combined="{ isPending: loading, error: errors }"
    :promise="requestPromise"
  >
    <form
      class="index-request-form"
      @submit.prevent="sendRequest"
    >
      <div class="index-request-form__inputs">
        <request-input
          v-model="payload.name"
          class="index-request-form__inputs-name"
          placeholder="ФИО, наименование*"
          type="text"
          icon="person"
          :disabled="loading"
          :error="errors ? errors.name : null"
        />

        <request-input
          v-model="phone"
          mask="+7 (999) 999-99-99"
          class="index-request-form__inputs-phone"
          placeholder="Введите ваш телефон*"
          type="text"
          icon="phone"
          :disabled="loading"
          :error="errors ? errors.phone : null"
        />

        <request-input
          v-model="payload.email"
          class="index-request-form__inputs-email"
          icon="mail"
          placeholder="Введите ваш e-mail"
          type="text"
          :disabled="loading"
          :error="errors ? errors.email : null"
        />

        <request-input
          v-model="payload.message"
          class="index-request-form__inputs-message"
          icon="text"
          placeholder="Введите сообщение"
          rows="5"
          :disabled="loading"
          textarea
        />
      </div>

      <Checkbox
        v-model="payload.agreement"
        class="index-request-form__agreement"
      >
        <p>
          Настоящим даю свое согласие на обработку персональных данных в соответствии с<br class="desktop-only">
          <a target="_blank" href="/">Политикой конфиденциальности и обработки персональных данных.</a>
        </p>
      </Checkbox>

      <Button
        class="index-request-form__submit"
        :disabled="!payload.name.length || !payload.phone.length || loading || !payload.agreement"
      />
    </form>
  </promised>
</template>

<script>
import RequestInput from '../../core/RequestInput'
import Checkbox from '../../core/Checkbox'
import Button from '../../core/Button'

export default {
  name: 'IndexRequestForm',
  components: {
    Button,
    Checkbox,
    RequestInput
  },
  data () {
    return {
      payload: {
        name: '',
        email: '',
        phone: '',
        message: '',
        agreement: false
      },
      requestPromise: Promise.resolve()
    }
  },
  computed: {
    phone: {
      get () {
        return this.payload.phone.slice(1)
      },
      set (value) {
        this.payload.phone = (value.match(/[\d+]/g) || [])
          .join('')
          .replace('+7', '8')
      }
    }
  },
  methods: {
    sendRequest () {
      this.requestPromise = this.$axios.post('/api/mail', this.payload)
        .then(this.success)
        .catch(this.error)
    },

    success () {
      this.$toasted.success('Ваша заявка успешно отправлена')
      this.reset()
    },

    error (error) {
      return Promise.reject(error.response.data)
    },

    reset () {
      this.errors = {}
      this.payload.name = ''
      this.payload.phone = ''
      this.payload.email = ''
      this.payload.message = ''
      this.payload.agreement = false
    }
  }
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

      @include respond-to($tablet) {
        grid-gap: 10px;
      }
    }

    &__inputs-name {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }

    &__inputs-phone {
      grid-column: 1 / 2;
      grid-row: 2 / 3;

      @include respond-to($tablet) {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
      }
    }

    &__inputs-email {
      grid-column: 2 / 3;
      grid-row: 2 / 3;

      @include respond-to($tablet) {
        grid-column: 1 / 3;
        grid-row: 3 / 4;
      }
    }

    &__inputs-message {
      grid-column: 1 / 3;
      grid-row: 3 / 4;

      @include respond-to($tablet) {
        grid-column: 1 / 3;
        grid-row: 4 / 5;
      }
    }

    &__agreement {
      @include f-d-checkbox;
      color: $white;
      margin-bottom: 40px;

      @include respond-to($tablet) {
        @include f-m-checkbox;
        margin-bottom: 15px;
      }

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

      &::before {
        content: 'Отправить';
      }

      @include respond-to($tablet) {
        width: 100%;

        &::before {
          content: 'Оставить заявку';
        }
      }
    }
  }
</style>
