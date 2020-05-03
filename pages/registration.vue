<template>
  <service header="Регистрация ООО/ИП, внесение изменений, ликвидация">
    <list :items="services" />
  </service>
</template>

<script>
import Service from '../components/core/service/Service'
import List from '../components/core/list/List'
export default {
  name: 'Registration',
  components: { List, Service },
  data () {
    return {
      services: [
        'Создание, ликвидация, реорганизация юридических лиц',
        'Сопровождение изменений форм собственности, видов деятельности, внесения изменений в учредительные документы',
        'Изменение размера и структуры уставного капитала',
        'Правовой аудит и разработка корпоративных документов (договоров, внутренних регламентов, локальных нормативных актов и пр.)'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .registration {

  }
</style>
