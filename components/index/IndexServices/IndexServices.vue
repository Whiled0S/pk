<template>
  <div class="index-services">
    <container>
      <h2 class="index-services__title">
        Услуги
      </h2>

      <index-services-card-list class="index-services__list">
        <index-services-card
          class="index-services__registration tablet-icon-57"
          icon="registration"
          to="/registration"
        >
          Регистрация ООО/ИП<br>Внесение изменений<br>Ликвидация
        </index-services-card>

        <index-services-card
          class="index-services__natural"
          icon="natural-person"
          to="/physical"
          text-center
          no-mobile-icon
        >
          Физическим лицам
        </index-services-card>

        <index-services-card
          class="index-services__legal"
          icon="legal-entity"
          to="/legal"
          text-center
          no-mobile-icon
        >
          Юридическим лицам
        </index-services-card>

        <index-services-card
          class="index-services__accounting tablet-icon-48"
          icon="accounting"
          to="/accounting"
          text-center
        >
          Бухгалтерские услуги
        </index-services-card>
      </index-services-card-list>

      <div class="index-services__button-container desktop-only">
        <ButtonRequest same-page />
      </div>
    </container>
  </div>
</template>

<script>
import Container from '../../core/Container'
import ButtonRequest from '../../core/ButtonRequest'
import IndexServicesCardList from './IndexServicesCardList'
import IndexServicesCard from './IndexServicesCard'
export default {
  name: 'IndexServices',
  components: { ButtonRequest, IndexServicesCard, IndexServicesCardList, Container }
}
</script>

<style lang="scss" scoped>
  .index-services {
    padding: 120px 0;
    box-sizing: border-box;

    @include respond-to($tablet) {
      padding: 20px 0;
    }

    &__title {
      @include f-d-h1;
      color: $dark-blue;
      margin-bottom: 30px;

      @include respond-to($tablet) {
        @include f-m-h1;
        margin-bottom: 15px;
      }
    }

    &__list {
      margin-bottom: 40px;

      @include respond-to($tablet) {
        margin-bottom: 0;
      }
    }

    &__button-container {
      text-align: center;
    }

    &__registration {

      @include respond-to($tablet) {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
      }
    }

    &__natural {

      @include respond-to($tablet) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }
    }

    &__legal {

      @include respond-to($tablet) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
    }

    &__accounting {

      @include respond-to($tablet) {
        grid-column: 1 / 3;
        grid-row: 3 / 4;
      }
    }
  }

  ::v-deep .tablet-icon-57 {

    @include respond-to($tablet) {

      svg {
        min-width: 57px;
        max-width: 57px;
        margin-right: 24px;
      }
    }
  }

  ::v-deep .tablet-icon-48 {

    @include respond-to($tablet) {

      svg {
        min-width: 48px;
        max-width: 48px;
        margin-right: 33px;
      }
    }
  }
</style>
