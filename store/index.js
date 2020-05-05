let savedScroll = 0

export default {

  state: () => ({
    showMobileMenu: false
  }),

  mutations: {
    SET_MOBILE_MENU_STATUS (state, status) {
      if (status) {
        savedScroll = window.pageYOffset
        document.body.style.top = `-${window.pageYOffset}px`
        document.body.classList.add('noscroll')
      } else {
        document.body.classList.remove('noscroll')
        window.scrollTo({ top: savedScroll, behavior: 'auto' })
      }

      state.showMobileMenu = status
    }
  }
}
