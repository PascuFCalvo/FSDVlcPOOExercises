let recetaCocina = {
  nombre: "arroz al horno",
  tiempoDePreparacion: 120,
  ingredentes: ["arroz", "patata", "morcilla", "garbanzos"],
};

let recetasCocina = [
  {
    nombre: "arroz a banda",
    tiempoDePreparacion: 90,
    ingredentes: ["arroz", "sepia", "gambas", "calamar"],
  },
  {
    nombre: "arroz negro",
    tiempoDePreparacion: 180,
    ingredentes: ["arroz", "tinta", "gambas", "calamar"],
  },
  {
    nombre: "fidua",
    tiempoDePreparacion: 120,
    ingredentes: ["fideo", "sepia", "calamar"],
  },
];

recetasCocina.push(recetaCocina)

recetasCocina.forEach(receta =>{
   console.log(receta.nombre)
   console.log(receta.tiempoDePreparacion)
   console.log("++INGREDIENTES++")

   
})