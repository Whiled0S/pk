<template>
  <div class="index-services">
    <container>
      <p class="index-services__title">
        Услуги
      </p>

      <index-services-card-list>
        <index-services-card icon="registration">
          Регистрация ООО/ИП<br>Внесение изменений<br>Ликвидация
        </index-services-card>

        <index-services-card icon="natural-person" text-center>
          Физическим лицам
        </index-services-card>

        <index-services-card icon="legal-entity" text-center>
          Юридическим лицам
        </index-services-card>

        <index-services-card icon="accounting" text-center>
          Бухгалтерские услуги
        </index-services-card>
      </index-services-card-list>
    </container>
  </div>
</template>

<script>
import Container from '../../core/Container'
import IndexServicesCardList from './IndexServicesCardList'
import IndexServicesCard from './IndexServicesCard'
export default {
  name: 'IndexServices',
  components: { IndexServicesCard, IndexServicesCardList, Container }
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
  }
</style>
