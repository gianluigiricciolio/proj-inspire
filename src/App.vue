<script>
// import store
import { store } from "./store";
// import components
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  name: "App",
  data() {
    return {
      store
    }
  },

  components: {
    HeaderApp,
    FooterApp,
  },
};
</script>

<template>
  <header>
    <HeaderApp />
  </header>
  <main v-cloak>
    <router-view></router-view>
  </main>
  <footer>
    <FooterApp />
  </footer>
</template>

<style scoped>
main {
  padding-top: 147.7px;
  min-height: 100vh;
}

footer {
  position: relative;
  z-index: 3;
}
</style>
