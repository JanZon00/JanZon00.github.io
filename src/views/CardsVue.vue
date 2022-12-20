<template>
  <v-container fluid class="pa-0 ma-0" style="background-color:#c2c2c2;height:100%">
      <v-row class="text-center pa-0 ma-0">
        <router-link to="/palowanie" class="pa-0 ma-0"><div class="arrowback"></div></router-link>
          <span v-if="mobileView"><MyNavbarCardsMobile></MyNavbarCardsMobile></span>
          <span v-else><MyNavbarCards></MyNavbarCards></span>
      </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import MyNavbarCards from '../components/MyNavbarCards.vue';
import MyNavbarCardsMobile from '../components/MyNavbarCardsMobile.vue';

export default defineComponent({
  name: 'NumbersVue',

  data() {
  },
  methods: {
    handleView() {
        this.mobileView = window.innerWidth <= 900;
    }
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
  },
  components: {
    MyNavbarCards,
    MyNavbarCardsMobile,
  },
});

</script>
<style>
.arrowback{
    position: absolute;
    background-size: cover;
    background-position: 50% 50%;
    background-image: url("../views/assets/arrowback.png");
    height: 60px;
    width: 60px;
    top:8px;
    left: 2px;
}
.arrowback:hover{
  transform: scale(1.12);
  transition: 0.4s;
}
@media screen and (max-width: 900px){
    .arrowback{ top:550px; }
}
</style>