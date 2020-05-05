<template>
  <div class="services">
    <service
      class="services__service"
      header="Юридические услуги"
      no-button
    >
      <div class="services__content">
        <list class="services__content-list" :items="legal[0]" />
        <list class="services__content-list" :items="legal[1]" />
      </div>
    </service>

    <h2 class="services__title">
      Банкротство
    </h2>

    <service
      class="services__service"
      header="Недвижимость"
      header-tag="h2"
      no-button
    >
      <div class="services__content">
        <list class="services__content-list" :items="estate[0]" />
        <list class="services__content-list" :items="estate[1]" />
      </div>
    </service>

    <service
      class="services__service"
      header="Представительство в суде"
      header-tag="h2"
      no-button
    >
      <div class="services__content">
        <list class="services__content-list" :items="court[0]" />
        <list class="services__content-list" :items="court[1]" />
      </div>
    </service>

    <h2 class="services__title">
      Юридический аутсорсинг – абоненское обслуживание юридических лиц и индивидуальных предпринимателей
    </h2>

    <h2 class="services__title">
      Регистрация товарного знака
    </h2>

    <service
      class="services__service"
      header="Бухгалтерские услуги"
      header-tag="h2"
    >
      <div class="services__content">
        <list class="services__content-list" :items="accounting[0]" />
        <list class="services__content-list" :items="accounting[1]" />
      </div>
    </service>
  </div>
</template>

<script>
import Service from '../components/core/service/Service'
import List from '../components/core/list/List'
export default {
  name: 'Services',
  components: { List, Service },
  data () {
    return {
      legal: [
        [
          'Юридическая консультация',
          'Подготовка договора <br class="desktop-only"/>средней сложности (на базе <br class="desktop-only"/>стандартного имеющегося с внесение <br class="desktop-only"/>незначительных корректировок основных <br class="desktop-only"/>условий)',
          'Подготовка учредительных документов <br class="desktop-only"/>и государственная регистрация ООО',
          'Внесение изменений в сведения из ЕГРЮЛ <br class="desktop-only"/>о юридических лицах',
          'Юридическая проверка готовых <br class="desktop-only"/>учредительных документов  клиента',
          'Ликвидация организации без процедуры <br class="desktop-only"/>банкротства',
          'Внесение изменений в сведения <br class="desktop-only"/>об индивидуальном предпринимателе <br class="desktop-only"/>в ЕГРИП',
          'Подготовка заявлений в МРИ ФНС <br class="desktop-only"/>без подачи и получения <br class="desktop-only"/>листа записи (форма Р)'
        ],
        [
          'Подготовка простого договора (на <br class="desktop-only"/>базе стандартного имеющегося)',
          'Подготовка сложного договора (большая <br class="desktop-only"/>часть условий согласовывается с <br class="desktop-only"/>заказчиком)',
          'Подготовка учредительных документов и <br class="desktop-only"/>государственная регистрация акционерного <br class="desktop-only"/>общества',
          'Подготовка и внесение изменений <br class="desktop-only"/>в учредительные документы (увеличение/<br class="desktop-only"/>уменьшение уставного капитала, смена <br class="desktop-only"/>адреса, выход участника и <br class="desktop-only"/>распределение доли)',
          'Реорганизация общества',
          'Госрегистрация ИП',
          'Ликвидация предпринимательской <br class="desktop-only"/>деятельности без участия в ПФ и ФСС'
        ]
      ],
      estate: [
        [
          'Регистрация прав и сделок с <br class="desktop-only"/>недвижимостью в УФСРКК',
          'Оформление прав на земельные <br class="desktop-only"/>участки, оформление сервитута',
          '<span class="bold">Ведение наследственных дел</span>',
          '<span class="bold">Оформление трудовых отношений на<br class="desktop-only"/> предприятии</span> (подготовка полного пакета<br class="desktop-only"/> внутренних документов, необходимых для<br class="desktop-only"/> осуществления деятельности<br class="desktop-only"/> предприятия)'
        ],
        [
          'Заказ кадастровых паспортов, выписок<br class="desktop-only"/> из ЕГРП',
          'Приватизация жилых помещений',
          '<span class="bold">Сопровождение сделки у нотариуса</span>',
          '<span class="bold">Подготовка предприятия к проверке<br class="desktop-only"/> трудовой инспекцией</span> (анализ имеющихся<br class="desktop-only"/> документов, подготовка недостающих<br class="desktop-only"/> документов)'
        ]
      ],
      court: [
        [
          'Анализ судебного дела (изучение<br class="desktop-only"/> представленных материалов и дача<br class="desktop-only"/> заключения о возможном исходе дела)',
          'Представительство в суде общей<br class="desktop-only"/> юрисдикции',
          'Ведение исполнительного производства'
        ],
        [
          'Составление заявлений, жалоб, претензий,<br class="desktop-only"/> ходатайств',
          'Представительство в Арбитражном суде'
        ]
      ],
      accounting: [
        [
          'Консультация бухгалтера',
          'Восстановление бухгалтерского учета',
          'Формирование учетной политики <br class="desktop-only"/>организации',
          'Ведение кадрового учета',
          'Нулевая отчетность'
        ],
        [
          'Ведение учета',
          'Разблокировка расчетного счета',
          'Отчетность по МСФО',
          'Заполнение деклараций 3- НДФЛ',
          'Разовые бухгалтерские услуги'
        ]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .services {

    &__service {
      margin-bottom: 40px;

      @include respond-to($tablet) {
        margin-bottom: 30px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    &__title {
      @include f-d-h1;
      color: $dark-blue;
      margin-bottom: 40px;

      @include respond-to($tablet) {
        @include f-m-h1;
        margin-bottom: 15px;
      }
    }

    &__content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 15px;

      @include respond-to($tablet) {
        grid-template-columns: 1fr;
      }
    }

    &__content-list {

      @include respond-to($tablet) {
        &:not(:last-child) {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
