<template>
  <div class="mobile-menu-content">
    <div class="mobile-menu-content__header">
      <img src="../../../assets/images/logo-dark.svg?data" alt="logo">
      <span>Аутсорсинг бухгалтерии юридических услуг</span>
    </div>

    <ul class="mobile-menu-content__menu">
      <li>
        <nuxt-link
          to="/"
          class="mobile-menu-content__menu-link"
        >
          Главная
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/company"
          class="mobile-menu-content__menu-link"
        >
          O компании
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/services"
          class="mobile-menu-content__menu-link"
        >
          Услуги
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/contacts"
          class="mobile-menu-content__menu-link"
        >
          Контакты
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MobileMenuContent'
}
</script>

<style lang="scss" scoped>
  .mobile-menu-content {

    &__header {
      padding: 17px 15px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid $dark-blue;

      img {
        height: 30px;
        margin-right: 7px;
      }

      span {
        font-size: 10px;
        line-height: 11px;
        color: $dark-blue;
      }
    }

    &__menu {
      padding-top: 7.5px;
    }

    &__menu-link {
      width: 100%;
      display: inline-block;
      padding: 7.5px 15px;
      box-sizing: border-box;
      @include f-m-text(300);
      color: $black;
      text-decoration: none;
    }
  }
</style>
