<template>
    <v-container fluid class="pa-0 ma-0">
      <v-row class="text-center pa-0 ma-0">
        <router-link to="/" class="pa-0 ma-0"><div class="arrowbackp"></div></router-link>
        <Palowanie />
      </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Palowanie from '../components/MyPalowanie.vue';

export default defineComponent({
  name: 'MyPalowanie',

  components: {
    Palowanie,
  },
  created(){
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
  },
});
</script>
<style>
.arrowbackp{
    position: absolute;
    background-size: cover;
    background-position: 50% 50%;
    background-image: url("../views/assets/arrowback.png");
    height: 60px;
    width: 60px;
    top:20px;
    left: 2px;
    z-index: 9999;
}
.arrowbackp:hover{
  transform: scale(1.12);
  transition: 0.4s;
}
</style>