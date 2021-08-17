<template>
    <div>
                   <!-- inicio cards relleno -->

                <v-row class="  mb-15">
                  <v-col
                    cols="12"
                    md="12"
                    class="align-center pa-0 ma-0 d-flex  justify-space-between"
                  >
                    <v-row class=" pa-2 ma-0">
                      <v-col
                        cols="12"
                        xs="12"
                        sm="6"
                        md="4"
                        v-for="(item, index) in personaje"
                        :key="item.id"
                        class="pa-2 ma-0 mt-8 align-center d-flex justify-space-between"
                      >
                        <template>
                          <v-card
                            class="mx-auto card__show--caricatura elevation-4"
                            style="border-radius:16px;"
                            max-width="326"
                            height="140"
                            outlined
                            :class="`animated fadeIn dura-${index}`"
                            @click="ShowModal(),personajeModal(item)"
                          >
                            <v-row class=" pa-0 ma-0">
                              <v-col cols="5" md="5" class="  pa-0 ma-0 ">
                                <v-img
                                  :src="item.image"
                                  class="Avatar"
                                  style="height:139px; width:140px; border-radius:10px;"
                                >
                                  <div class="Avatar__favorito--btn ">
                                    <v-img
                                      src="@/assets/favorite.svg"
                                      width="30px"
                                      class="favorite__caricatura ma-0  ml-3"
                                      style="border-radius:10px !important;"
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
                                        {{item.status}} - {{item.species}}
                                      </v-badge>
                                    </div>
                                    <v-list-item-title
                                      class="texto__card--name pa-0 ma-0 "
                                    >
                                   
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
                                             {{item.origin.name}}
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

    </div>
</template>

<script>
    export default {
          activarModal: {
            prop: "modal",
            event: "click",
        },
          props: {
            modal: Boolean,
               personaje:{ 
                       type: Array, 
                       required: false, 
                       default: () => [{ 
                       name:"sass-1", 
                       status: "hola", 
                       species: "No Tasks Provided", 
                       image:require('@/assets/character.png'),
                       origin:{
                       name:'hola'
                       }
                       },
                       { 
                       name:"sass-1", 
                       status: "hola", 
                       species: "No Tasks Provided", 
                        image:require('@/assets/character.png'),
                       origin:{
                       name:'hola'
                       }
                    }] },
          },
          data() {
                return {
                       activarmodal:true,
                       emitValor:4,
                       personagesMezcladas:[]
                }
            },
            created(){
        
            
            },
            methods:{

  
                personajeModal(caricatura){
                      console.log("objeto::",caricatura);
                      return this.$emit("caricatura", caricatura);
                },
                ShowModal(){
                    return this.$emit("showmodal", this.activarmodal);
                },
                   
               
            },
            computed:{
            
            }
        
    }
</script>

<style lang="scss" scoped>



.favorite__caricatura {
  cursor: pointer;
border-radius: 10px;
}
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
</style>