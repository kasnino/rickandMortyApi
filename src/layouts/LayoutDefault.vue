<template>
  <div>
    <header class="headerApp" style="">
      <v-img
        :src="require(`@/assets/rick-y-morty-fanart-2020_3840x2160_xtrafondos 1.png`)"
        height=""
        width=""
        class="elevation-15 "
      >
        <v-img
          :src="require(`@/assets/${imgDark[temaImg]}.png`)"
          width=""
          class="ma-0 elevation-10 "
          contain
        >
          <v-overlay
            style=" z-index:1;position:absolute;"
            :value="overlay"
            color="#000000"
            :opacity="opacity"
          ></v-overlay>

          <v-row
            class="  justify-center    pa-1 ma-1 "
            style="width:100%; z-index:5; position:absolute; height:auto;  "
          >
            <v-col
              cols="4"
              md="3"
              style=""
              class="tituloPortada  align-center   justify-center"
            >
              <v-img
                src="@/assets/rick and morty.png"
                height=""
                style="cursor:pointer;"
                @click="BackHome()"
                class=" pa-0 ma-0 justify-center text-center "
              ></v-img>
            </v-col>

            <v-col cols="12" md="12" style="" class="  pa-1">
              <v-row
                class="  justify-center   align-center   pa-1 ma-1 "
                style=" "
              >
                <v-col
                  cols="12"
                  sm="5"
                  class=" animated fadeIn dura-1"
                  style="position:relative;"
                >
                  <v-text-field
                    outlined
                    color="#FFFFFF"
                    solo
                    class="ma-0 pa-0"
                    height="60"
                    prepend-inner-icon="mdi-magnify"
                    label="Buscar personaje..."
                    v-model="searchQuery"
                  ></v-text-field>
                  <v-row
                    v-if="searchQuery"
                    class="  model--search   pa-0 ma-0 "
                    style=" "
                  >
                    <v-col cols="12" sm="5" class="">
                      <table class="table pa-0 ma-0">
                        <tbody>
                          <tr v-for="(item, index) in resultQuery" :key="index">
                            <td>
                              <a v-bind:href="item.uri" target="_blank">
                                {{item.name}}</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </v-col>
                  </v-row>
                    
                </v-col>
              </v-row>
            <v-btn
                          fab
                          dark
                          top
                          style="position:absolute; right:40px; top:12px; border:2px solid #48aa34"
                          bottom
                          class="btn__themecolor"
                          color="#071e31"
                        @click="ChangeColor()"
                        >
                    <v-icon v-if="changescolor" size="50" color="yellow">mdi-weather-sunny</v-icon>
                   <v-icon v-else size="50" color="yellow">mdi-moon-waxing-crescent</v-icon>
                    
                    </v-btn>
            </v-col>
              
          </v-row>
        
        </v-img>
      </v-img>
    </header>

    <slot class=""> </slot>
      
    <v-row class="  justify-center    pa-0 ma-0 " style=" height:auto;  ">
      <v-col
        cols="12"
        md="12"
        style=""
        class=" pa-0 ma-0 align-center   justify-center"
      >
        <v-footer class="pa-0 ma-0 ">
          <v-img
            src="@/assets/footermorty.svg"
            height="100"
            width=""
            style="background:#081F32"
            class="elevation-10 "
          >
            <v-overlay
              style=" z-index:1;position:absolute;"
              :value="overlay"
              color="#000000"
              :opacity="opacity"
            ></v-overlay>
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
                  style=" z-index:5; height:auto;  "
                ></v-img>
              </v-col>
            </v-row>
          </v-img>
        </v-footer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LayoutA",
  data() {
    return {
      imgDark:['portal-morty-smith-rick (1)', 'rick-y-morty-fanart-2020_3840x2160_xtrafondos 1'],
      temaImg:0,
      absolute: true,
      overlay: true,
      opacity: 0.6,
      searchQuery: "",
      listPersonajes: [],
      searchQuery: null,
       changescolor:false
    };
  },
  mounted() {
    this.TodosDatos();
  },
  methods: {
             ChangeColor(){
            const thema = document.getElementById("thema");
            if(!this.changescolor){
                 thema.classList.remove("themalight")
                 thema.classList.add("themadark")
                 this.temaImg = 1
                 this.changescolor = true
            }else{
                thema.classList.add("themalight")
                thema.classList.remove("themadark")
                  this.temaImg = 0
                this.changescolor = false
    
               
            }
    },
    TodosDatos() {
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then((result) => {
          console.log("layout: ", result.data);
          this.listPersonajes = result.data;
          // store to local
        })
        .catch((error) => console.log(error))
        .finally(() => (this.loading = false));
    },
    BusquedaPersonajes() {
      return this.$router.push({ path: "/search" });
    },

    BackHome() {
      return this.$router.push({ path: "/" });
    },
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        console.log("lkjlkfsjf");
        return this.listPersonajes.results.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.listPersonajes.results;
      }
    },
  },
};
</script>

<style lang="scss">

.btn__themecolor{
  box-shadow: 0px 3px 3px 1px rgba(93, 203, 60, 0.699),
    0px -3px 5px 0px rgba(93, 203, 60, 0.685),
    0px 1px 11px 1px rgba(93, 203, 60, 0.61) !important;
}
.model--search {
  background: #0d3454;
  color: #f5f5f5c4;
  z-index: 500;
  margin-top: -150px;
  position: absolute;
  top: 77px;
  width: 95%;
}
.headerApp {
}

.v-input__icon--prepend-inner .v-icon {
  color: #ffffff !important;
  font-size: 37px !important;
  font-weight: bold !important;
}
.v-input__slot {
  background: #081f32 !important;
  height: 65px !important;
  border: 1px solid #f2f2f2 !important;
  font-family: Montserrate !important;
  color: #f2f2f2 !important;
  border-radius: 6px !important;
  font-weight: bold;
  font-size: 18px;
}

.v-text-field__slot input {
  text-transform: capitalize;
  margin-left: 15px;
  color: #f2f2f2 !important;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px #081f32 inset !important;
}

input:-webkit-autofill {
  -webkit-text-fill-color: #f2f2f2 !important;
}
.v-text-field__slot label {
  margin-left: 15px;
  color: #f2f2f2 !important;
}
</style>
