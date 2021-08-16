<template>
  <v-container
    class="fill-height pa-0 ma-0 contenedor"
    fluid
    style="background:black;overflow: hidden; !important; display:inline-block"
  >
    <v-overlay
      style=" z-index:1;position:absolute; overflow:hidden;"
      :class="{ 'overlay-main': activareffect }"
      :value="overlay"
      color="#000000"
      :opacity="opacity"
    ></v-overlay>
    <v-row wrap style="width:100%;height:100%; overflow-y: hidden; position:relative;white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" class="pa-0 ma-0 " >
      <v-col cols="12" class="  pa-0 ma-0  black ">
        <section id="cabecera" class="">
          <v-row
            wrap
            class="fill-height justify-center align-center  pa-0 ma-0 "
            :class="{ superponer: activareffect }"
            style="width:100%; z-index:3; position:absolute; "
          >
            <v-col
              cols="12"
              md="12"
              class="  align-center text-center   justify-center"
            >
              <v-row class="  justify-center" style="width:100%; ">
           
                <v-col
                  cols="12"
                  md="11"
                  style=""
                  class="tituloPortada pa-0 ml-14 mt-12 fill-height d-flex flex-column justify-center align-center "
                >
                  <v-img
                    src="@/assets/Horizontal (4) 1.png"
                    height=""
                    width="134.81px"
                    class="mr-15 pa-0 ma-0 animated fadeIn dura-0"
                  ></v-img>
                  <v-img
                    src="@/assets/rick and morty.svg"
                    height=""
                    width="500"
                    class=" justify-center text-center animated bounceIn dura-1"
                  ></v-img>

                  <span class="tituloPortada__subtitulo animated fadeIn dura-2"
                    >Bienvenido a Rick and Morty</span
                  >
                  <v-row class="  mt-2 justify-center   " style="width:100%; ">
                    <v-col
                      cols="12"
                      md="9"
                      class="pa-0 ma-0 fill-height d-flex flex-column justify-center align-center "
                    >
                      <span
                        class="tituloPortada__sub--description  animated fadeIn dura-3"
                      >
                        En esta prueba, evaluaremos su capacidad para construir
                        la aplicación mediante el análisis de <br />
                        código y la reproducción del siguiente diseño.
                      </span>

                      <div class="text-center mt-5">
                        <v-btn
                          rounded
                          color="#11555F"
                          dark
                          class="mt-5 mr-12 animated  bounceIn dura-4 elevation-17"
                          :class="{ 'anim-zoom': activareffect }"
                          style="text-transform: capitalize;"
                          @click="NextDashboard()"
                        >
                          Continuar
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",

  components: {
    HelloWorld,
  },
  data() {
    return {
      absolute: true,
      overlay: true,
      opacity: 0.6,
      activareffect: false,
    };
  },
  mounted() {
    setTimeout(() => {
      return (this.activareffect = true);
    }, 3000);
  },
  methods: {
    NextDashboard() {
      return this.$router.push({ path: "/about" });
    },
  },
};
</script>
<style lang="scss" scoped>

.v-container{
  overflow: hidden !important;
  position: relative;
}

::-webkit-scrollbar {
        display: none;
    }
:root .v-application .elevation-17 {
  box-shadow: 0px 3px 3px 1px rgba(93, 203, 60, 0.699),
    0px -3px 5px 0px rgba(93, 203, 60, 0.685),
    0px 1px 11px 1px rgba(93, 203, 60, 0.61) !important;
}
#cabecera {
  background-image: url("../assets/portal-morty-smith-rick.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: contain;
  background-color: #000000;
  height: 800px;
  overflow: hidden !important;
  white-space: nowrap; overflow: hidden;text-overflow: ellipsis;
}

.overlay-main {
  z-index: 1 !important;
  position: absolute;
}
.superponer {
  z-index: 3;
  position: absolute;
}
.tituloPortada__subtitulo {
  /* Bienvenido a Rick and Morty */
  font-family: Montserrate;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  z-index: 3;
  color: #ffffff;
}

.tituloPortada__sub--description {
  font-family: Montserrate;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  /* or 167% */
  text-align: center;
  color: #ffffff;
}
.contenedor {
  overflow: hidden !important;
  overflow-y: hidden !important;
}

html {
  overflow: scroll;
  overflow-x: hidden;
}
.contenedor::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
.contenedor::-webkit-scrollbar-thumb {
  background: #ff0000;
}
</style>
