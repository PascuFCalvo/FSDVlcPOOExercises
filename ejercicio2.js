export class Password {
   constructor(longitud = 8, contraseña = ""){

      this.longitud = longitud;
      this.contraseña = contraseña;
      }

      generar(){
         const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

         for (let i = 0; i < this.longitud; i++) {
            const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            this.contraseña += caracterAleatorio;
          }
          console.log(this.contraseña)
          return this.contraseña
      }
}

const contraseña = new Password(10);

contraseña.generar();


   

   
