<template>
     <Login />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Login from '../components/MyLogin.vue';

export default defineComponent({
  name: 'MyLogin',

  components: {
    Login,
  },
});
</script>