<template>
  <v-app>
  <div id="app">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" >
    @import "sass/globals";
  

      @font-face {
        font-family: MonserrateMedium;
        src: url("./assets/fonts/MontserratAlternates-Medium.ttf");
        
      }
      @font-face {
        font-family:Montserrate; 
        src: url("./assets/fonts/Montserrat-Light.otf");
        
      }


</style>
