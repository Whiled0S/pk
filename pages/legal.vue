<template>
  <service header="Услуги для юридических лиц">
    <div class="legal__services">
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

      @include respond-to($tablet) {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
