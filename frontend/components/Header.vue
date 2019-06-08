<template>
  <section class="hero is-info is-medium is-bold">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="../">
              <img
                src="http://bulma.io/images/bulma-type-white.png"
                alt="Logo"
              />
            </a>
            <span class="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" class="navbar-menu">
            <div class="section">
              <div class="field has-addons">
                <div class="control is-expanded">
                  <input
                    class="input has-text-centered"
                    type="search"
                    placeholder=""
                  />
                </div>
                <div class="control">
                  <a class="button is-info">Search</a>
                </div>
              </div>
            </div>
            <div class="navbar-end">
              <div class="tabs is-right">
                <ul>
                  <li class="is-active"><a>Read</a></li>
                  <li><a href="">Review</a></li>
                  <li><a href="">Help</a></li>
                </ul>
                <span class="navbar-item">
                  <!-- <div class="buttons has-addons is-right">
                    <span
                      class="button is-primary is-inverted is-outlined is-active"
                      >Review</span
                    >
                    <span class="button">Read</span>
                  </div> -->
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {}
  }
}
</script>
