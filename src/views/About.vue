<template>
  <div>
    <v-row class="  justify-center   align-center dashboard  " style=" ">
      <v-col cols="12" sm="12" class="pa-0 ma-0">
        <v-card color="#f2f2f2" class="pa-3 ma-3">
          <v-row class="  justify-center   align-center dashboard  " style=" ">
            <v-col cols="12" sm="10" class="pa-0 ma-0">
              <v-tabs
                v-model="tab"
                fixed-tabs
                background-color="#f2f2f2"
                style="color:#000000;"
                dark
                height="70"
                class="pa-0   ma-0"
              >
                <v-tabs-slider color="#34c759"></v-tabs-slider>

                <v-tab
                  v-for="(item, index) in items"
                  :key="item.id"
                  style="color:#666666;"
                  class="tab__categopry"
                  :class="`animated fadeInUp dura-${index + 2 * 1} `"
                >
                  {{ item }}
                </v-tab>
              </v-tabs>
            </v-col>
          </v-row>
        </v-card>
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="item in items"
            :key="item"
            :transition="transition"
          >
            <v-row
              class="  justify-center  mt-7 align-center dashboard  "
              style=" "
            >
              <v-col cols="12" sm="10" class=" pa-0 ma-0" style="">
                <v-row class=" pa-1 ma-1">
                  <v-col
                    cols="10"
                    md="2"
                    class="pa-1 ma-1 ml-2  align-center d-flex"
                  >
                    <div class="  texto__titulo ">
                      Mostrar favoritos:
                    </div>
                    <div class="texto__titulo ">
                      <v-img
                        src="@/assets/favorite.svg"
                        width="30px"
                        class="favorite__caricatura ma-0  ml-3"
                        contain
                      >
                      </v-img>
                    </div>
                  </v-col>
                </v-row>

                <!-- inicio cards relleno -->

                <v-row class="  mb-15">
                  <v-col
                    cols="12"
                    md="12"
                    class="  align-center pa-0 ma-0 d-flex "
                  >
                    <v-row class=" pa-0 ma-0 ">
                      <v-col
                        cols="12"
                        xs="12"
                        sm="6"
                        md="4"
                        lg="4"
                        xl="3"
                        v-for="(item, index) in 18"
                        :key="item"
                        class="pa-0 ma-0   mt-8 align-center d-flex"
                      >
                        <template>
                          <v-card
                            class="mx-auto card__show--caricatura elevation-4"
                            style="border-radius:16px;"
                            max-width="326"
                            height="140"
                            outlined
                            :class="`animated fadeIn dura-${index} `"
                          >
                            <v-row class=" pa-0 ma-0">
                              <v-col cols="5" md="5" class="  pa-0 ma-0 ">
                                <v-img
                                  src="@/assets/character.png"
                                  class="Avatar"
                                  style="height:139px; width:140px;"
                                >
                                  <div class="Avatar__favorito--btn ">
                                    <v-img
                                      src="@/assets/favorite.svg"
                                      width="30px"
                                      class="favorite__caricatura ma-0  ml-3"
                                      contain
                                    >
                                    </v-img>
                                  </div>
                                </v-img>
                              </v-col>

                              <v-col cols="7" md="7" class="  pa-0 ma-0">
                                <v-list-item three-line class="pa-0 ma-0 ml-2">
                                  <v-list-item-content class="pa-0 ma-0 mt-3">
                                      <div style="line-height:17px; " class="ma-1">
                                    <div class="texto__card--descriccion ml-4">
                                    
                                      <v-badge
                                        bordered
                                        color="success"
                                        dot
                                        left
                                        offset-x="-5"
                                        offset-y="10"
                                      >
                                        Alive - Human
                                      </v-badge>
                                    </div>
                                    <v-list-item-title
                                      class="texto__card--name pa-0 ma-0 "
                                    >
                                      Morty Smith
                                    </v-list-item-title>
                                    </div>

                                      <div style="line-height:12px; " class="ma-1">
                                            <v-list-item-subtitle class="texto__card--subdescription"
                                              >Last known location:
                                              </v-list-item-subtitle
                                            >
                                                <v-list-item-title
                                              class="texto__card--sublocation pa-0 ma-0 "
                                            >
                                             Story Train
                                            </v-list-item-title>
                                      </div>

                                       <div style="line-height:12px; " class="ma-1">
                                            <v-list-item-subtitle class="texto__card--subdescription"
                                              >First seen in:
                                              </v-list-item-subtitle
                                            >
                                                <v-list-item-title
                                              class="texto__card--sublocation pa-0 ma-0 "
                                            >
                                            Never Ricking Morty
                                            </v-list-item-title>
                                      </div>
                                  </v-list-item-content>
                                </v-list-item>
                              </v-col>
                            </v-row>
                          </v-card>
                        </template>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transition: false,
      tab: null,
      items: ["All", "Unknown", "Female", "Male", "Genderless"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
<style lang="scss" scoped>

.texto__card--sublocation{
  /* Story Train */


font-family: Montserrate;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 15px;
/* identical to box height */
text-align: left;

color: #000000;


}
.texto__card--subdescription{
  /* Last known location: */
font-family: Montserrate;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 12px;

color: #828282;


}
.texto__card--descriccion {
  /* Alive - Human */
  font-family: Montserrate;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;

  color: #4f4f4f;
}

.texto__card--name {
  /* Morty Smith */

  font-family: Montserrate;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  /* identical to box height */
  text-align: left;

  color: #000000;
}

.Avatar__favorito--btn {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
.card__show--caricatura {
  border-radius: 10px !important;
  border: 1px solid #e0e0e0;
  cursor: pointer;
}

.card__show--caricatura:hover {
  transform: scale(1.02);
  background: #20ef0954;
  box-shadow: 0px 3px 3px 1px rgba(93, 203, 60, 0.699),
    0px -3px 5px 0px rgba(93, 203, 60, 0.685),
    0px 3px 11px 1px rgba(93, 203, 60, 0.61) !important;
}
.tab__categopry {
  font-family: MonserrateMedium;
  text-transform: capitalize;
  font-style: normal;
  font-weight: 100;
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  color: #f2f2f2;
}

.texto__titulo:hover {
  text-decoration-color: chartreuse;
  text-decoration-line: underline;
  color: #071e31;
  font-weight: bold;

  transform: all 1s;
  cursor: pointer;
}

.favorite__caricatura {
  cursor: pointer;
}
.texto__titulo {
  /* Mostrar favoritos: */

  font-family: Montserrate;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-align: left;

  color: #000000;
}
</style>
