<template>
  <div class="company">
    <h1 class="company__title">
      О компании
    </h1>

    <p class="company__info">
      Более 10 лет опыта в различных областях права.<br>
      Широкий перечень услуг.<br>
      Доступное, адекватное ценообразование.<br>
      Индивидуальный подход.<br>
      Соблюдение режима строгой конфиденциальности.<br>
      Комплексная защита бизнеса.<br>
      Предоставление полного анализа ситуации для принятия решений.<br>
      Профессиональная и сплоченная команда специалистов в различных отраслях права. Сложная юридическая терминология с нами станет доступна и понятна.<br>
      Добиваемся положительного результата в подавляющем большинстве случаев.<br>
      Создаём для вас лучшие условия сотрудничества.<br>
      Работать с нами легко!
    </p>
  </div>
</template>

<script>
export default {
  name: 'Company'
}
</script>

<style lang="scss" scoped>
  .company {

    &__title {
      @include f-d-h1;
      color: $dark-blue;
      margin-bottom: 24px;

      @include respond-to($tablet) {
        @include f-m-h1;
        margin-bottom: 20px;
      }
    }

    &__info {
      @include f-d-text;
      line-height: 1.3;
      color: $black;

      @include respond-to($tablet) {
        @include f-m-text(300);
        line-height: 1.3;
      }
    }
  }
</style>
