<template>
  <div class="text-center">
    <v-dialog
      v-model="modal"
      width="740px"
      persistent
      :fullscreen="$vuetify.breakpoint.xsOnly"
      content-class="custom-dialog"
      elevation-10
      style=""
    >
      <v-card class="crad__modal elevation-14" style="border-radius:12px;">
        <div class="header-avatar">
          <v-img
            src="@/assets/Home/bg.png"
            height=""
            width=""
            class="elevation-15 "
          >
            <!-- <v-spacer> </v-spacer> -->
            <button
              v-if="mostrarCerrar"
              @click="$emit('click', false)"
              class="boton-cerrar"
            >
              <img src="@/assets/Home/Vector.png" alt="botón-cerrar" />
            </button>
          </v-img>
          <v-row
            class="  elevation-0 pa-0 ma-0 justify-center"
            style="width:100%; background:#f2f2f2;"
          >
            <v-col
              cols="12"
              md="4"
              style="position:relative;"
              class=" pa-4 fill-height d-flex  flex-column justify-center align-center "
            >
              <v-img
                :src="perfilPersonaje.image"
                height="155"
                width="155"
                class="header-avatar___modal elevation-4 animated bounceIn dura-1"
              >
              </v-img>
              <v-row class="  justify-center" style="width:100%;;">
                <v-col
                  cols="1"
                  md="1"
                  sm="1"
                  style="position:relative;"
                  class=" pa-3 fill-height d-flex  flex-column justify-end align-center "
                >
                  <div class="Avatar__favoritored pa-4  ">
                    <v-img
                      src="@/assets/Home/Home/favorite.png"
                      width="30px"
                      height="30px"
                      class="Avatar__favorito--img pa-1 ma-1 animated fadeIn dura-2 "
                      style="position:absolute;"
                      contain
                    >
                    </v-img>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>

        <v-card-text
          class="card__modal--subHeader pa-0 ma-0 "
          style="    display: flex;
            justify-content: center;
            align-items: flex-end;"
        >
          <v-flex contain class="dialog-content" text-xs-center>
            <v-row
              class="  pa-0 ma-0 mt-1 justify-center align-end align-end"
              style="width:100%;  "
            >
              <v-col
                cols="7"
                md="7"
                style=""
                class=" ma-0 pa-0 d-flex   text-center justify-center align-end"
              >
                <v-list-item three-line class="pa-0 ma-0  ">
                  <v-list-item-content class="pa-0 ma-0 mt-0">
                    <div class="texto__subheader-title">
                      {{ perfilPersonaje.status }}
                    </div>
                    <v-list-item-title
                      class="texto__header-subtitle pa-0 mt-0 "
                    >
                      {{ perfilPersonaje.name }}
                    </v-list-item-title>

                    <v-list-item-title
                      class="texto__header-title-end pa-0 ma-0 mt-0"
                    >
                      {{ perfilPersonaje.species }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-flex>
        </v-card-text>
        <v-card-text
          class="crad__modal--text white"
          v-scroll:#infinitescrollest="InfiniteScroller"
          style=""
        >
          <v-flex contain class="dialog-content" text-xs-center>
            <v-row class=" pa-1 ma-1">
              <v-col
                cols="10"
                md="4"
                class="pa-0 ma-0 mt-3  align-center d-flex"
              >
                <div class="  texto__informacion--modal">
                  Informacion
                </div>
              </v-col>
            </v-row>

            <v-row class=" pa-0 ma-0 d-flex justify-space-between ">
              <v-col cols="3" class="pa-0 ma-0   mt-5 align-center d-flex">
                <template>
                  <v-card
                    class="mx-auto card__text--modal elevation-0 pa-1"
                    style="border-radius:5px;"
                    width="163"
                    outlined
                    :class="`animated fadeIn dura-1 `"
                  >
                    <div style="line-height:20px; " class="ma-1">
                      <v-list-item-subtitle
                        class="texto__card__sub-Description--modal"
                        ><v-icon small>mdi-alert-circle</v-icon> Gender
                      </v-list-item-subtitle>
                      <v-list-item-title
                        class="texto__card--description-modal pa-0 ma-0 ml-1 "
                      >
                        {{ perfilPersonaje.gender }}
                      </v-list-item-title>
                    </div>
                  </v-card>
                </template>
              </v-col>

              <v-col cols="3" class="pa-0 ma-0   mt-5 align-center d-flex">
                <template>
                  <v-card
                    class="mx-auto card__text--modal elevation-0 pa-1"
                    style="border-radius:5px;"
                    width=""
                    outlined
                    :class="`animated fadeIn dura-2 `"
                  >
                    <div style="line-height:20px; " class="ma-1">
                      <v-list-item-subtitle
                        class="texto__card__sub-Description--modal"
                        ><v-icon small>mdi-alert-circle</v-icon> Origin
                      </v-list-item-subtitle>
                      <v-list-item-title
                        class="texto__card--description-modal pa-0 ma-0 ml-1 "
                      >
                        {{ perfilPersonaje.origin.name }}
                      </v-list-item-title>
                    </div>
                  </v-card>
                </template>
              </v-col>

              <v-col cols="3" class="pa-0 ma-0   mt-5 align-center d-flex">
                <template>
                  <v-card
                    class="mx-auto card__text--modal elevation-0 pa-1"
                    style="border-radius:5px;"
                    width="163"
                    outlined
                    :class="`animated fadeIn dura-1 `"
                  >
                    <div style="line-height:20px; " class="ma-1">
                      <v-list-item-subtitle
                        class="texto__card__sub-Description--modal"
                        ><v-icon small>mdi-alert-circle</v-icon> Type
                      </v-list-item-subtitle>
                      <v-list-item-title
                        class="texto__card--description-modal pa-0 ma-0 ml-1 "
                      >
                        <span v-if="perfilPersonaje.type">
                          {{ perfilPersonaje.type }}
                        </span>
                        <span v-else>
                          No tiene
                        </span>
                      </v-list-item-title>
                    </div>
                  </v-card>
                </template>
              </v-col>
            </v-row>
            <v-row class=" pa-1 ma-1">
              <v-col
                cols="10"
                md="12"
                class="pa-0 ma-0 mt-3  align-center d-flex"
              >
                <v-divider class="mt-2"></v-divider>
              </v-col>
            </v-row>

            <v-row class=" pa-1 ma-1">
              <v-col
                cols="10"
                md="4"
                class="pa-0 ma-0 mt-3  align-center d-flex"
              >
                <div class="  texto__informacion--modal">
                  Episodios ({{ perfilPersonaje.episode.length }})
                </div>
              </v-col>
            </v-row>

            <v-row class=" pa-0 ma-0 d-flex justify-space-between ">
              <v-col
                cols="3"
                v-for="(item, index) in perfilPersonaje.episode"
                :key="item"
                class="pa-0 ma-0   mt-5 align-center d-flex"
              >
                <template>
                  <v-card
                    class="mx-auto card__text--modal elevation-0 pa-1"
                    style="border-radius:5px;"
                    width="153"
                    outlined
                    :class="`animated fadeIn dura-${index} `"
                  >
                    <div style="line-height:20px; " class="ma-1">
                      <v-list-item-subtitle
                        class="texto__card__sub-Description--modal"
                        >Pilot
                      </v-list-item-subtitle>
                      <v-list-item-title
                        class="texto__card--description-modal pa-0 ma-0  ml-1 "
                      >
                        SO1E0I
                      </v-list-item-title>
                      <v-list-item-subtitle
                        class="texto__card__endDescription  ml-1"
                      >
                        Diciembre 2, 2012
                      </v-list-item-subtitle>
                    </div>
                  </v-card>
                </template>
              </v-col>
            </v-row>

            <v-row class=" pa-1 ma-1">
              <v-col
                cols="10"
                md="12"
                class="pa-0 ma-0 mt-3  align-center d-flex"
              >
                <v-divider class="mt-2"></v-divider>
              </v-col>
            </v-row>

            <v-row class=" pa-1 ma-1">
              <v-col
                cols="10"
                md="6"
                class="pa-0 ma-0 mt-3  align-center d-flex"
              >
                <div class="  texto__informacion--modal">
                  Personajes interesantes
                </div>
              </v-col>
            </v-row>

            <!-- inicio cards relleno -->
            <CardPersonaje :personaje="personajes"></CardPersonaje>
          </v-flex>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import CardPersonaje from "@/components/CardPersonaje";

export default {
  components: { CardPersonaje },
  model: {
    prop: "modal",
    event: "click",
  },
  props: {
    perfilPersonaje: {
      type: Object,
      required: false,
      default: function() {
        return {
          name: "sass-1",
          status: "hola",
          species: "No Tasks Provided",
          episode: ["video"],
          image: require("@/assets/character.png"),
          origin: {
            name: "hola",
          },
        };
      },
    },
    modal: Boolean,
    width: {
      type: String,
      default: "740px",
    },
    fullscreen: {
      type: Boolean,
      default: true,
    },
    mostrarCerrar: {
      type: Boolean,
      default: true,
    },
    backgroundB: {
      type: String,
      default: "#CAD500",
    },
  },
  data() {
    return {
      personajes: [
        {
          name: "sass-1",
          status: "hola",
          species: "No Tasks Provided",
          image: require("@/assets/character.png"),
          origin: {
            name: "hola",
          },
        },
        {
          name: "sass-1",
          status: "hola",
          species: "No Tasks Provided",
          image: require("@/assets/character.png"),
          origin: {
            name: "hola",
          },
        },
      ],
    };
  },
  methods: {
    InfiniteScroller(e) {
      console.log(e);
    },
  },
  watch: {
    fullscreen: function(value) {
      if (value) {
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/helpers/variables";

.texto__card__endDescription {
  /* "year" */

  font-family: Montserrate;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 13px;
  text-transform: uppercase;
  /* identical to box height, or 118% */
  letter-spacing: 0.07px;

  color: #828282;

  /* Inside Auto Layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 0px;
}

.v-dialog {
  width: unset;
  height: unset;
}
.v-dialog--custom {
  height: 1000px;
}
.custom-dialog.v-dialog {
  margin: 10px !important;
}

.texto__card--description-modal {
  /* "name" */

  font-family: Montserrate;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  /* identical to box height, or 129% */
  letter-spacing: -0.41px;

  color: #081f32;

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
}
.texto__card__sub-Description--modal {
  /* "type" */

  font-family: Montserrate;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  /* identical to box height, or 118% */
  letter-spacing: 0.07px;

  color: #828282;

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 4px;
}
.texto__informacion--modal {
  /* Información */

  font-family: Montserrate;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  color: #4f4f4f;
}
.texto__subheader-title {
  /* ALIVE */

  font-family: Montserrate;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  /* identical to box height */
  text-transform: uppercase;
  color: #4f4f4f;
}

.texto__header-title-end {
  /* info/primary */

  /* HUMAN */

  font-family: Montserrate;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;

  text-transform: uppercase;
  color: #4f4f4f;
}

.texto__header-subtitle {
  /* Beth Smith */

    font-family: MonserrateMedium;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;

  color: #081f32;
}
.header-avatar {
  position: relative;
}
.header-avatar___modal {
  border-radius: 50%;
  border: 3px solid #ffffff;
}
.card__modal--subHeader {
  width: 100%;
  height: 160px;
  background: #f2f2f2;
  padding: 10px;
}
.crad__modal--text {
  width: 100%;
}
.header-avatar___modal {
  position: absolute;
  top: -80px;
}
.boton-cerrar {
  position: absolute;
  right: 10px;
  top: 10px;
}
.Header__modal {
  background: #fff;
  height: 50px;
}

.avatar___modal {
  border-radius: 100%;
  position: absolute;
  top: 35px;
  left: 35%;
}
.Avatar__favoritored {
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
}

.Avatar__favorito--img {
  position: absolute;
  z-index: 100;
  bottom: -75px;
  left: 0px;
}
</style>
