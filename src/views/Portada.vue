<template>
  <div>
    <v-row class="  justify-center   align-center dashboard  " style=" ">
      <v-col cols="12" sm="12" class="pa-0 ma-0">
        <v-card color="#f2f2f2" class="pa-3 ma-3">
          <v-row class="  justify-center   align-center nav__sub-header  " style=" ">
            <v-col cols="12" sm="10" class="pa-0 ma-0">
              <v-tabs
              light
                    v-model="tab"
                    fixed-tabs
                    style=""
                    height="70"
                    class="pa-0 nav__header  ma-0"
              >
                <v-tabs-slider color="#34c759"></v-tabs-slider>
                <v-tab
                
                  v-for="(item, index) in items"
                  :key="item.id"
                  style="color:var(--texto__navegacion); background:var(--barra__navegacion);"
                  class="tab__categopry"
                  :class="`animated fadeInUp dura-${index + 2 * 1} `"
                  @click="ShowAllDataFilter(index)"
                >
                  {{ item }}
                </v-tab>
              </v-tabs>
            </v-col>
          </v-row>
        </v-card>
        <v-tabs-items v-model="tab" class="windows__relleno">
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
                    class="pa-1 ma-1 ml-8  align-center d-flex"
                  >
                    <div class=" favorite__text  ">
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
                <!-- inicio cards relleno-->
                <div v-if="listPersonajes">
                  <CardPersonaje
                    @showmodal="EmitModal"
                    @caricatura="reciboPersonaje"
                    :personaje="listPersonajes.results"
                  ></CardPersonaje>
                </div>
            
                <!-- inicio cards relleno -->

                <v-row class=" pa-1 ma-1">
                  <v-col
                    v-if="listPersonajes"
                    cols="12"
                    md="12"
                    class="pa-1 ma-1 ml-2 justify-center  align-center d-flex"
                    style="height:150px;"
                  >
                    <div class="text-center">
                      <v-pagination
                        v-model="page"
                        :length="pagination.total"
                        :total-visible="7"
                        @input="PaginationFiltre"
                      ></v-pagination>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
    <div v-if="emitmensaje">
      <modal-app
        :perfilPersonaje="perfilCaricatura"
        v-model="model"
      ></modal-app>
    </div>
  </div>
</template>

<script>
import personajes from "@/logic/personajes";
import CardPersonaje from "@/components/CardPersonaje";
import axios from "axios";
export default {
    components: {
        CardPersonaje
    },
    data() {
        return {
            rutas: ["portada", "Unknown", "Female", "Male", "Genderless"],
            emitmensaje: false,
            transition: false,
            tab: null,
            page: 1,
            model: false,
            event: false,
            perfilCaricatura: {},
         
            genero: '',
            listPersonajes: [],
            activeFilters: [],
            RespaldoAllData: [],
            pagination: {
                pages: 1,
                total: 0,
            },
            url: "",
            githubPage: 1,
            contador: 0,
            items: ["All", "Unknown", "Female", "Male", "Genderless"],
            categoryFilters: ['Female'],
            categoryFiltersMale: ['Male'],
            statusFilter: ['unknown'],
            filteredArticles: {},
            filtro: ['', 'status', 'gender', 'gender', 'gender'],
            categoryFiltro: ['Genderless'],
            loading:true
        };
    },

    mounted() {

        this.TodosDatos();
     
      
    },

    created() {
  
    },

    methods: {
          
                      mezclarArreglo(arreglo) {
                for (let i = arreglo.length - 1; i > 0; i--) {
                  let indiceAleatorio = Math.floor(Math.random() * (i + 1));
                  let temporal = arreglo[i];
                  arreglo[i] = arreglo[indiceAleatorio];
                  arreglo[indiceAleatorio] = temporal;
                }
              },
              randomNumber(){
                if(this.listPersonajes.results.length > 2){ 
                 const personagesMezcladas = Array.from(this.listPersonajes.results);
                this.mezclarArreglo(personagesMezcladas);
                console.log("Personajes mezcladas: ", personagesMezcladas);
                return this.listPersonajes.results =  personagesMezcladas
              }

    },
              TodosDatos() {
                let local_data = JSON.parse(localStorage.getItem('local_data'))
                let pages_data = JSON.parse(localStorage.getItem('pages_data'))
    
              if (local_data) {
                   // load from local
                  this.listPersonajes = local_data
                  this.pagination.total = pages_data 
                   this.randomNumber();
            }else { 
            axios
                .get("https://rickandmortyapi.com/api/character/?page=" + this.page)
                .then((result) => {
                    console.log(result.data);
                    this.RespaldoAllData = result.data;
                    this.listPersonajes = result.data;
                    this.pagination.total = result.data.info.pages;
                    this.randomNumber();
                  // store to local
                    localStorage.setItem('local_data', JSON.stringify(result.data));
                    localStorage.setItem('pages_data', JSON.stringify(result.data.info.pages));
                })
                .catch(error => console.log(error))
                .finally(() => this.loading = false)
            }
        },
        filterGenero(personajes) {

            this.filteredArticles = this.categoryFilters.reduce((acc, item) => {
                acc[item] = personajes.filter(a => a.gender === item);
                console.log("ctaegirty:", acc[item])
                return this.listPersonajes.results = acc[item]

            }, {});

        },
        filterGeneroMale(personajes) {

            this.filteredArticles = this.categoryFiltersMale.reduce((acc, item) => {
                acc[item] = personajes.filter(a => a.gender === item);
                console.log("ctaegirty:", acc[item])
                return this.listPersonajes.results = acc[item];

            }, {});

        },
        filterGenderles(personajes) {

            this.filteredArticles = this.categoryFiltro.reduce((acc, item) => {
                acc[item] = personajes.filter(a => a.gender === item);
                console.log("ctaegirty:", acc[item])
                return this.listPersonajes.results = acc[item];

            }, {});

        },
        filterStatus(personajes) {
            this.filteredArticles = this.statusFilter.reduce((acc, item) => {
                acc[item] = personajes.filter(a => a.status === item);
                console.log("ctaegirty:", acc[item])

                return this.listPersonajes.results = acc[item];

            }, {});

        },
        ShowAllDataFilter(ruta) {
            if (ruta == 0) {
                return this.TodosDatos();
            }
            if (ruta == 1 &&   this.listPersonajes) {
                return console.log(ruta), this.filterStatus(this.listPersonajes.results);
            }
            if (ruta == 2  && this.listPersonajes) {
                return console.log(ruta), this.filterGenero(this.listPersonajes.results);
            }
            if (ruta == 3 &&   this.listPersonajes) {
                return console.log(ruta), this.filterGeneroMale(this.listPersonajes.results);
            }
            if (ruta == 4 &&   this.listPersonajes) {
                return console.log(ruta), this.filterGenderles(this.listPersonajes.results);
            }

            // console.log("ctaegirty:",this.listPersonajes.results[0].gender );

        },
        reciboPersonaje(dataPersonaje) {
            return (this.emitmensaje = true), (this.perfilCaricatura = dataPersonaje);
        },
        EmitModal(info) {
            return (this.model = info);
        },
        scrollBehavior() {
            return {
                x: 0,
                y: 0
            }, document.getElementById('app').scrollIntoView();
        },

        PaginationFiltre() {
            return axios
                .get("https://rickandmortyapi.com/api/character/?page=" + this.page)
                .then((result) => {
                    this.listPersonajes = result.data;
                      this.randomNumber();
                    if (this.tab == 0) {
                        this.listPersonajes = result.data;
                    }
                    if (this.tab == 1) {
                        this.filterStatus(this.listPersonajes.results);
                    }
                    if (this.tab == 2) {
                        this.filterGenero(this.listPersonajes.results);
                    }
                    if (this.tab == 3) {
                        this.filterGeneroMale(this.listPersonajes.results);
                    }
                    if (this.tab == 4) {
                        this.filterGenderles(this.listPersonajes.results);
                    }
                }),
                this.scrollBehavior();
        },
        ShowModalInfo() {
            if (!this.model) {
                return (this.model = true);
            } else {
                return (this.model = false);
            }
        }
    },
    computed: {
      
        categoryFilterSet() {
            console.log();
            return new Set(this.categoryFilters)
        }
    },
}; </script>
<style lang="scss" scoped>

 .favorite__text{
      font-family:Montserrate; 
  text-transform: capitalize;
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  color: var(--texto__titulo-relleno);
 }
.nav__sub-header{
background: var(--fondo__sub-barra--nav);
}
.dashboard{
  background:var(--fondo__color);
}

.windows__relleno{
    background:var(--fondo__color) !important;;
}

.theme--light.v-tabs > .v-tabs-bar {
background: yellow;
}
.nav__header{
    background-color:var(--barra__navegacion) !important;
    background: var(--barra__navegacion);
}

#app > div > div:nth-child(2) > div > div > div.pa-3.ma-3.v-card.v-sheet.theme--light > div > div > div > div{
background-color: yellow !important;
}

.v-tabs .v-tabs-bar {
  
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
