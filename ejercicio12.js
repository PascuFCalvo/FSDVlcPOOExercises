let arrayDeObjetos = [
   {nombre:"pascual", apellidos:"fernandez"},
   {nombre: "ana", apellidos:"ruiz"},
   {nombre: "paco", apellidos: "pil"},
]

let sacarNombre = (arrayDeObjetos) => {
   arrayDeObjetos.forEach(persona => {
      console.log(persona.nombre)
      
   });
}

sacarNombre(arrayDeObjetos)