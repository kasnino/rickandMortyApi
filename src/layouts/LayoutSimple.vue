<template>
 <v-container fluid ma-0 pa-0 class="contenido " style="overflow: hidden !important;">
    <slot />
 </v-container>
</template>

<script>
export default {
  name: "LayoutB"
};
</script>

<style lang="scss" scoped>
.contenido::-webkit-scrollbar {
  display: none;
}

  body::-webkit-scrollbar {
        display: none;
    }
</style>