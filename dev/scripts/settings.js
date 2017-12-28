(function () {
  function Settings (options) {
    Object.assign(this, options)

    this.toggle = function () {
      this.element.classList.toggle(this.opened)
    }
    // this.show = function () {
    //   this.element.classList.add(this.opened)
    // }
    // this.hide = function () {
    //   this.element.classList.remove(this.opened)
    // }
    this.init = function () {
      this.toggler.addEventListener('click', this.toggle.bind(this))
    }
    // this.destroy = function () {
    //   this.toggler.removeEventListener('click', this.toggle.bind(this))
    // }
  }

  window.Settings = Settings
})();
