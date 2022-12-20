<template>
     <Register />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Register from '../components/MyRegister.vue';

export default defineComponent({
  name: 'MyRegister',

  components: {
    Register,
  },
});
</script>