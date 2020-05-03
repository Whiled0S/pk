<template>
  <service header="Услуги для юридических лиц">
    <div class="legal__services">
      <list :items="services[0]" />

      <list :items="services[1]" />
    </div>
  </service>
</template>

<script>
import Service from '../components/core/service/Service'
import List from '../components/core/list/List'
export default {
  name: 'Legal',
  components: { List, Service },
  data () {
    return {
      services: [
        [
          'Арбитраж',
          'Взыскание долгов',
          'Представительство в суде',
          'Банкротство',
          'Досудебное урегулирование споров'
        ],
        [
          'Представительство в госорганах',
          'Сопровождение бизнеса',
          'Корпоративные споры',
          'Договорное право',
          'Интеллектуальное право'
        ]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .legal {

    &__services {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 15px;
    }
  }
</style>
