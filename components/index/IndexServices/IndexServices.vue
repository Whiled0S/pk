<template>
  <div class="index-services">
    <container>
      <p class="index-services__title">
        Услуги
      </p>

      <index-services-card-list class="index-services__list">
        <index-services-card icon="registration" to="/registration">
          Регистрация ООО/ИП<br>Внесение изменений<br>Ликвидация
        </index-services-card>

        <index-services-card icon="natural-person" to="/physical" text-center>
          Физическим лицам
        </index-services-card>

        <index-services-card icon="legal-entity" to="/legal" text-center>
          Юридическим лицам
        </index-services-card>

        <index-services-card icon="accounting" to="/accounting" text-center>
          Бухгалтерские услуги
        </index-services-card>
      </index-services-card-list>

      <div class="index-services__button-container">
        <Button>Оставить заявку</Button>
      </div>
    </container>
  </div>
</template>

<script>
import Container from '../../core/Container'
import Button from '../../core/Button'
import IndexServicesCardList from './IndexServicesCardList'
import IndexServicesCard from './IndexServicesCard'
export default {
  name: 'IndexServices',
  components: { Button, IndexServicesCard, IndexServicesCardList, Container }
}
</script>

<style lang="scss" scoped>
  .index-services {
    padding: 120px 0;

    &__title {
      @include f-d-h1;
      color: $dark-blue;
      margin-bottom: 30px;
    }

    &__list {
      margin-bottom: 40px;
    }

    &__button-container {
      text-align: center;
    }
  }
</style>
