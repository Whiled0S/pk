<template>
  <div
    class="navbar"
    :class="{ 'navbar_bottom': bottom }"
  >
    <div class="navbar__logo">
      <img
        src="../../assets/images/logo.svg?data"
        alt="logo"
      >
    </div>

    <ul class="navbar__menu">
      <li>О компании</li>
      <li>Услуги</li>
      <li>Контакты</li>
    </ul>

    <span class="navbar__phone">+7 900 300-20-20</span>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    bottom: Boolean
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

      li:not(:last-child) {
        margin-right: 30px;
      }
    }
  }
</style>
