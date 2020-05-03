<template>
  <service header="Услуги для физических лиц">
    <div class="physical__services">
      <list :items="services[0]" />

      <list :items="services[1]" />
    </div>
  </service>
</template>

<script>
import Service from '../components/core/service/Service'
import List from '../components/core/list/List'
export default {
  name: 'Physical',
  components: { List, Service },
  data () {
    return {
      services: [
        [
          'Защита прав потребителей',
          'Взыскание долгов',
          'Представительство в суде',
          'Страховые споры',
          'Наследство',
          'Возмещение ущерба'
        ],
        [
          'Жилищное право',
          'Семейные споры',
          'Сопровождение сделок',
          'Административное право',
          'Досудебное урегулирование',
          'Составление договоров'
        ]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .physical {

    &__services {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 15px;
    }
  }
</style>
