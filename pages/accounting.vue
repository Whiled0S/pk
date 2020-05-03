<template>
  <service header="Бухгалтерские услуги">
    <div class="accounting__services">
      <list :items="services[0]" />

      <list :items="services[1]" />
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
    }
  }
</style>
