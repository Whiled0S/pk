export default {

  state: () => ({
    showMobileMenu: false
  }),

  mutations: {
    SET_MOBILE_MENU_STATUS (state, status) {
      state.showMobileMenu = status
    }
  }
}
