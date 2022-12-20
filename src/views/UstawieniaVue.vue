<template>
  <v-container fluid class="pa-0 ma-0" style="background-color:#c2c2c2;height:100%">
      <v-row class="text-center pa-0 ma-0">
        <router-link to="/" class="pa-0 ma-0"><div class="arrowback"></div></router-link>
      </v-row>
      <div class="break"></div>
      <h1 style="test-align: center">Witaj {{ nickname }}</h1>
      <button class="logout_button" @click="logout">Wyloguj się</button>
  </v-container>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({

  data() {
    return {
      nickname: '',
    }
  },
  components: {
  },
  mounted() {
    axios.get('http://localhost:5000/data', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.nickname = res.data.user.nickname;
      })
  },
  methods: {
    handleView() {
        this.mobileView = window.innerWidth <= 800;
    },
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
    this.handleView();
    window.addEventListener('resize', this.handleView);
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
.break{
  margin-top: 100px;
}
.logout_button{
    margin-top: 10px;
    margin-left: 5px;
    width: 100px;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
}
</style>