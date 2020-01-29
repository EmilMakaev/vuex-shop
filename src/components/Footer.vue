<template>
  <footer class="footer">
    <div class="bottom-panel">

      <div class="panel">
        <router-link to="/">
          <email :size="30" />
          <p class="cart">Email</p>
        </router-link>
      </div>

      <div class="panel">
        <button class="panel__button" @click="showModal = true">
          <phone-in-talk :size="30" />
          <p class="cart">Phone</p>
        </button>
      </div>

      <transition name="fade-two" appear>
        <div 
          class="modal-overlay"
          v-if="showModal"
          @click="showModal = false"
        >
        </div>
      </transition>

      <transition name="slide" appear>
      <div 
        class="modal"
        v-if="showModal"
      >
        <form
          method="POST"
          ref="modal"
          class="modal"
        >
        <div>
          <header class="modal__header">
            <h2>Request a call</h2>
          </header>
          <section>
            <div>
              <label class="modal__lable">Your phone number:</label>
              <div>
                <input
                  class="input"
                  type="number"
                  placeholder="Enter your number"
                  required
                />
              </div>
            </div>
          </section>
          <footer>
            <button 
              class="button modal__button btn"
              @click="showModal = false"
            >Send request</button>

            <button 
              class="button modal__button btn"
              @click="showModal = false"
            >Cancel</button>
          </footer>
        </div>
      </form>

        
      </div>
    </transition>

      <div class="panel">
        <router-link to="/cart">
          <cart-plus :size="30" />
          <span class="panel__notification">{{cartItemCount}}</span>
          <p class="cart">Cart</p>
        </router-link>
      </div>

      <div class="panel">
        <router-link to="/">
          <map-marker :size="30" />
          <p class="cart">Map</p>
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.lengthOfCart || 0
    }
  },
}
</script>