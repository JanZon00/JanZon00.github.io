<template>
  <v-container fluid class="pa-0 ma-0" style="background-color:#c2c2c2;height:100%">
      <v-row class="text-center pa-0 ma-0">
        <router-link to="/palowanie" class="pa-0 ma-0"><div class="arrowback"></div></router-link>
        <v-col cols="12" class="pa-0 ma-0">
         <span v-if="mobileView"><MyNavbarLettersMobile></MyNavbarLettersMobile></span> 
         <span v-else><MyNavbarLetters></MyNavbarLetters></span>
        </v-col>
        <v-col cols="12" class="pa-0 ma-0">
          <div class="site">
            <div id="displayletter"></div>
          </div>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import MyNavbarLetters from '../components/MyNavbarLetters.vue';
import MyNavbarLettersMobile from '../components/MyNavbarLettersMobile.vue';

export default defineComponent({
  name: 'NumbersVue',

  data() {
  },
  methods: {
    handleView() {
        this.mobileView = window.innerWidth <= 800;
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
    MyNavbarLetters,
    MyNavbarLettersMobile,
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
#displayletter {
  width: 200px;
  height: 100px;
  background-color: #168707;
  border-radius: 10px;
  line-height: 100px;
}
.site{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
@media screen and (max-width: 800px){
    .site{ height: 20vh; }
}
@media screen and (max-width: 800px){
    .arrowback{ top:550px; }
}
</style>