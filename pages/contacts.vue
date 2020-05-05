<template>
  <div class="contacts">
    <h1 class="contacts__header">
      Контакты
    </h1>

    <div class="contacts__info">
      <div class="contacts__info-col">
        <span class="contacts__info-text">Телефон: +7 900 300 20-20</span>
        <span class="contacts__info-text">Email: pk@gmail.com</span>
      </div>

      <div class="contacts__info-col">
        <span class="contacts__info-text">Общество с ограниченной ответственностью «ПК»</span>
        <span class="contacts__info-text">«PK» LTD</span>
      </div>

      <div class="contacts__info-col">
        <span class="contacts__info-text">ИНН 5047238093</span>
        <span class="contacts__info-text">КПП 504701001</span>
        <span class="contacts__info-text">ОГРН 1205000009433</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style lang="scss" scoped>
  .contacts {

    &__header {
      margin-bottom: 30px;
      @include f-d-h1;
      color: $dark-blue;
    }

    &__info {
      display: grid;
      grid-auto-flow: column;
      grid-column-gap: 86px;
    }

    &__info-col {

    }

    &__info-text {
      display: block;
      @include f-d-text;
      color: $black;

      &:not(:last-child) {
        margin-bottom: 15px;
      }

      &_nowrap {
        white-space: nowrap;
      }
    }
  }
</style>
