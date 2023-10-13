let recetaCocina = {
   nombre : "arroz al horno",
   tiempoDePreparacion : 120,
   ingredentes : ["arroz","patata","morcilla","garbanzos"]
}

let mostrarReceta = (recetaCocina) =>{
   console.log(recetaCocina.nombre);
   console.log(recetaCocina.tiempoDePreparacion);
   console.log("--INGREDIENTES--")


   recetaCocina.ingredentes.forEach(ingrediente => {
      console.log(`${ingrediente}`)
      
   });

}

mostrarReceta(recetaCocina)

