<template>
  <div class="mobile-menu">
    <div
      v-show="showMobileMenu"
      class="mobile-menu__backdrop"
      :class="{ 'mobile-menu__backdrop_active': showMobileMenu }"
      @click="$store.commit('SET_MOBILE_MENU_STATUS', false)"
    />
    <transition name="slide">
      <aside
        v-show="showMobileMenu"
        class="mobile-menu__aside"
      >
        <mobile-menu-content class="mobile-menu__content" />
      </aside>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MobileMenuContent from './MobileMenuContent'

export default {
  name: 'MobileMenu',
  components: { MobileMenuContent },
  computed: {
    ...mapState(['showMobileMenu'])
  }
}
</script>

<style lang="scss" scoped>
  .mobile-menu {
    z-index: 10;

    &__backdrop {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &_active {
        animation: fade-bg .2s forwards;
      }
    }

    &__aside {
      position: fixed;
      top: 0;
      left: 0;
      width: 200px;
      height: 100vh;
      background-color: $white;
      overflow-y: auto;

      &::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        background-image: url('../../../assets/images/pattern-white.svg');
        background-repeat: repeat;
        opacity: .1;
      }

      &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        background: linear-gradient(180deg, #F9F9FA 0%, #FBFBFC 33.55%, rgba(255, 255, 255, 0) 100%);
      }
    }

    &__content {
      position: relative;
      z-index: 1;
    }
  }

  .slide-enter-active,
  .slide-leave-active
  {
    transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
  }

  @keyframes fade-bg {
    from {
      background-color: rgba($black, 0);
    }

    to {
      background-color: rgba($black, .7);
    }
  }
</style>
