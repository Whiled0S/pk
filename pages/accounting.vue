<template>
  <service header="Бухгалтерские услуги">
    <div class="accounting__services">
      <list class="desktop-only" :items="services[0]" />

      <list class="desktop-only" :items="services[1]" />

      <list class="tablet-only" :items="services.flat()" />
    </div>
  </service>
</template>

<script>
import Service from '../components/core/service/Service'
import List from '../components/core/list/List'
export default {
  name: 'Accounting',
  components: { List, Service },
  data () {
    return {
      services: [
        [
          'Бухгалтерское сопровождение',
          'Нулевая отчетность',
          'Бухгалтерское и налоговое консультирование'
        ],
        [
          'Восстановление учета',
          'Взаимодействие с ИФНС',
          'Сверка с контрагентами'
        ]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .accounting {

    &__services {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 15px;

      @include respond-to($tablet) {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
