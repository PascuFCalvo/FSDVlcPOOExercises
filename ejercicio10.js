let persona = {
   nombre : "Pascual",
   apellidos : "fernandez",
   edad : 36,
   direccion : "calle bellus 8",
   ciudad : "valencia",
   pais : "españa"
}
// 10, funcion que obtiene el nombre completo

const sacarNombre = (persona)=>{
   console.log (`${persona.nombre} ${persona.apellidos}` )
}

sacarNombre(persona)

//11, sacar por desestucturacion 3 propiedades

console.log (persona.nombre, persona.edad, persona.pais)

