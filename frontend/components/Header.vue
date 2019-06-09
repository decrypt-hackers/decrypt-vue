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
          </div>
          <div id="navbarMenu" class="navbar-menu">
            <div class="section">
              <div v-if="readView" class="field has-addons">
                <div class="control is-expanded">
                  <input
                    v-model="filter"
                    class="input"
                    type="search"
                    placeholder="Type Username"
                  />
                </div>
                <div class="control">
                  <a class="button is-light" @click="filterView()"
                    ><div id="searchtext">Search by User</div></a
                  >
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
                  <span>{{ balance }} coin</span>
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
  async created() {
    if (!this.$easy.easy) {
      await this.$easy.enable()
      await this.getBalance()
    }
  },
  data: function() {
    return {
      filter: '',
      balance: 0
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
      this.$emit('showReview')
    },
    read() {
      this.$emit('showRead')
    },
    filterView() {},
    async getBalance() {
      if (!this.$easy.easy) return

      const address = window.ethereum.selectedAddress

      const response = await this.$easy.easy.get('/api/balance', {
        params: {
          address
        }
      })

      this.balance = response.data.balance

      console.log('getBalance', response.data) // eslint-disable-line
    }
  }
}
</script>

<style scoped>
#searchtext {
  color: #209cee;
}
</style>
