import { Password } from "./ejercicio2.js"

const SEXO = "H"

export class Persona {
   constructor(nombre = "", edad = 0, dni = "", sexo = SEXO, peso = 0, altura = 0){
      this.nombre = nombre;
      this.eda = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;

   }

   
}

const Pascual = new Persona("Pascual",36,"12345678A","H",100,180);
const Ana = new Persona("Ana",39,"12345678A","M",60,152);


console.log(Pascual)
console.log(Ana)


const contraseña = new Password(2);
contraseña.generar();

