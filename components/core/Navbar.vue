<template>
  <div
    class="navbar"
    :class="{ 'navbar_bottom': bottom }"
  >
    <div class="navbar__logo">
      <nuxt-link to="/">
        <img
          v-if="darkLogo"
          src="../../assets/images/logo-dark.svg?data"
          alt="logo"
        >
        <img
          v-else
          src="../../assets/images/logo.svg?data"
          alt="logo"
        >
      </nuxt-link>
    </div>

    <ul class="navbar__menu">
      <li v-if="main">
        <nuxt-link to="/">
          Главная
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/company">
          О компании
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/services">
          Услуги
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contacts">
          Контакты
        </nuxt-link>
      </li>
    </ul>

    <span class="navbar__phone">+7 900 300-20-20</span>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    bottom: Boolean,
    main: Boolean,
    darkLogo: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &_bottom {
      align-items: flex-end;
    }

    &__logo {
      display: flex;
      flex-grow: 1;
      text-align: left;
    }

    &__phone {
      flex-grow: 1;
      font-weight: 500;
      font-size: 25px;
      line-height: 29px;
      text-align: right;
    }

    &__menu {
      display: flex;
      @include f-d-text;

      li {

        a {
          color: inherit;
          text-decoration: none;
        }

        &:not(:last-child) {
          margin-right: 30px;
        }
      }
    }
  }
</style>
