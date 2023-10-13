class receta{
   constructor(nombre, tiempoPreparacion, ingredientes){
      this.nombre = nombre;
      this.tiempoPreparacion = tiempoPreparacion;
      this.ingredientes = ingredientes;
   }   
}

let arrozALhorno = new receta("arrozAlhorno",120,["arroz","patata","carne"])
let arrozABanda = new receta("arrozABanda",90,["arroz","calamar","gamba"])
let arrozNegro = new receta("arrozABanda",100,["arroz","calamar","tinta"])

let arrayRecetas = [];

arrayRecetas.push(arrozALhorno,arrozABanda,arrozNegro)

let ShowRecetas = (arrayRecetas) =>{
   arrayRecetas.forEach(receta => {
      console.log (receta.nombre)
      console.log (receta.tiempoPreparacion)
      console.log("++INGREDIENTES++")
      receta.ingredientes.forEach(ingrediente =>{
         console.log(ingrediente)
      })
      console.log("")

      
      
   });
}

ShowRecetas(arrayRecetas)