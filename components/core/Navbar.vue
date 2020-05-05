<template>
  <div
    class="navbar"
    :class="{ 'navbar_bottom': bottom }"
  >
    <div
      class="navbar__burger"
      @click="$store.commit('SET_MOBILE_MENU_STATUS', true)"
    >
      <button>
        <img
          v-if="darkLogo"
          src="../../assets/images/burger-dark.svg?data"
          alt="menu"
        >
        <img
          v-else
          src="../../assets/images/burger.svg?data"
          alt="menu"
        >
      </button>
    </div>

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

    <a
      href="tel:+7 900 300-20-20"
      class="navbar__phone"
    >+7 900 300-20-20</a>
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

    &__burger {
      display: none;
      flex: 1;

      button {
        appearance: none;
      }

      @include respond-to($tablet) {
        display: flex;
      }
    }

    &__logo {
      display: flex;
      flex: 1;
      text-align: left;

      @include respond-to($tablet) {
        flex: unset;

        img {
          height: 30px;
        }
      }
    }

    &__phone {
      flex: 1;
      font-weight: 500;
      font-size: 25px;
      line-height: 29px;
      text-align: right;
      color: inherit;

      @include respond-to($tablet) {
        font-size: 12px;
        line-height: 14px;
      }

      &_dark {
        color: $dark-blue;
      }
    }

    &__menu {
      display: flex;
      @include f-d-text;

      @include respond-to($tablet) {
        display: none;
      }

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
