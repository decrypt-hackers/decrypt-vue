<template>
  <section class="hero is-info is-medium is-bold">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="../">
              <img
                src="../assets/logo.png"
                alt="Logo"
              />
            </a>
            <span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" class="navbar-menu">
            <div class="section">
              <div class="field has-addons" v-if="readView">
                <div class="control is-expanded">
                  <input
                    v-model="filter"
                    class="input"
                    type="search"
                    placeholder="Type Username"
                  />
                </div>
                <div class="control">
                  <a @click="filterView()" class="button is-light"><div id='searchtext'>Search by User</div></a>
                </div>
              </div>
            </div>
            <div class="navbar-end">
              <div class="tabs is-right">
                <ul>
                  <li :class="{ 'is-active' : !readView}"><a @click="read()">Read</a></li>
                  <li :class="{ 'is-active' : !readView}" v-if="permission"><a @click="review()">Review</a></li>
                </ul>
                <span class="navbar-item">
                  <!-- <div class="buttons has-addons is-right">
                    <span
                      class="button is-primary is-inverted is-outlined is-active"
                      >Review</span
                    >
                    <span class="button">Read</span>
                  </div> -->
                  <span class="icon">
                    <font-awesome-icon
                      icon="user"
                      style="font-size: 25px; color: white;"
                    />
                  </span>
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
    return {
      filter: ''
    }
  },
  props: {
    permission: {
      type: Boolean,
      default: false
    },
    readView: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    review() {
      this.$emit("showReview")
    },
    read() {
      this.$emit("showRead")
    },
    filterView() {
      
    }
  }
}
</script>

<style scoped>
#searchtext {
  color: #209cee;
}
</style>