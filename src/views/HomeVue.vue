<template>
    <Home />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Home from '../components/MyHome.vue';

export default defineComponent({
  name: 'MyHome',

  components: {
    Home,
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
  },
});
</script>