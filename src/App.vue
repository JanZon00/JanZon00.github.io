<template>
  <v-app>
    <v-main class="pa-0 ma-0">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition" :mode="route.meta.mode">
          <component :is="Component" />
        </transition>
 
      </router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
<style>
@media screen and (min-width: 600px){
  .grow-in-enter-from,
  .grow-in-leave-to{
    opacity: 0.8;
    transform: scale(2);
  }
}
@media screen and (min-width: 600px){
  .grow-in-enter-active,
  .grow-in-leave-active{
    transition: 0.35s ease-out;
  }
}

@media screen and (max-width: 600px){
  .grow-in-enter-from,
  .grow-in-leave-to{
    opacity: 0;
  }
}
@media screen and (max-width: 600px){
  .grow-in-enter-active,
  .grow-in-leave-active{
    transition: opacity 0.35s ease-out;
  }
}

.slide-enter-active{
  position: absolute;
  transition: all 0.4s ease-out;
}
.slide-enter-from {
  position: absolute;
  opacity: 0.3;
  transform: translate(-100%)
}
.slide-leave-to {
  position: absolute;
  opacity: 0.3;
  transform: translate(100%)
}
.slide-leave-active {
  position: absolute;
  transition: all 0.4s ease-in;
}
</style>
