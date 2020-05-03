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
        <span class="contacts__info-text contacts__info-text_nowrap">Общество с ограниченной ответственностью «ПК»</span>
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
      display: flex;
      flex-direction: row;
    }

    &__info-col {

      &:first-child {
        margin-right: 59px;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
      }

      &:nth-child(2) {
        margin-right: 64px;
      }

      &:last-child {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
      }
    }

    &__info-text {
      display: inline-block;
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
