
const ap2=Vue.createApp({
  data(){
    return{
        heroes:[
          {nombre:"Mr. Dishes",estado:"Disponible", costo: 200},
          {nombre:"Espumosa",estado:"No disponible", costo: 450},
          {nombre:"Mesie-Comi",estado:"No disponible", costo: 600},
          {nombre:"Sra. Brillosa",estado:"Disponible", costo: 380},
          {nombre:"Mr. Compras",estado:"Disponible", costo: 700}
        ],
        minimo:0,
       
        }
  },
  computed:{
    mejoresHeroes(){
      return this.heroes.filter((heroes)=>heroes.costo<=this.minimo);
    }
  }
});
 
ap2.mount('#card')

const ap3=Vue.createApp({
    data(){
      return{
        heroes:[
          {nombre:"Mr. Dishes",estado:"Disponible",costo:200, tareas:'20'},
          {nombre:"Espumosa",estado:"No disponible",costo:450, tareas:'15'},
          {nombre:"Mesie-Comi",estado:"No disponible",costo:600, tareas:'25'},
          {nombre:"Sra. Brillosa",estado:"Disponible",costo:380, tareas:'15'},
          {nombre:"Mr. Compras",estado:"Disponible",costo:700, tareas:'10'},
        ],
        buscar:'',
      }
    },
    computed:{
  heroeEncontrado(){
    return this.heroes.find(heroe =>
      heroe.nombre.toLowerCase().includes(this.buscar.toLowerCase().trim())
    )
  },
  heroesCoinciden(){
    return this.heroes.filter(heroe =>
      heroe.nombre.toLowerCase().includes(this.buscar.toLowerCase().trim())
    ).length
  },
  heroesOrdenados(){
    return this.heroes.sort((a, b) => b.tareas - a.tareas)
  }
}
});

ap3.mount('#card2');
