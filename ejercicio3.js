export class Electrodomestico {
  constructor(precioBase, color, consumoEnergetico, peso) {
    this.precioBase = precioBase || 0;
    this.color = this.comprobarColor(color) || "blanco";
    this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico) || "F";
    this.peso = peso;
  }

  comprobarConsumoEnergetico(letra) {
    const consumosValidos = ["A", "B", "C", "D", "E", "F"];

    for (let i = 0; i <= consumosValidos.length; i++) {
      if (consumosValidos.includes(letra)) {
        return letra;
      }
    }
    return "F";
  }

  comprobarColor(color) {
    const coloresValidos = ["blanco", "negro", "rojo", "azul", "gris"];

    for (let i = 0; i <= coloresValidos.length; i++) {
      let normalizedColor = color.toLowerCase();
      if (coloresValidos.includes(normalizedColor)) {
        return normalizedColor;
      }
    }
    return "blanco";
  }

  precioFinal(consumo, tamano) {
    let precioFinal = this.precioBase;

    switch (consumo) {
      case "A":
        precioFinal = precioFinal + 100;
        break;
      case "B":
        precioFinal = precioFinal + 80;
        break;
      case "C":
        precioFinal = precioFinal + 60;
        break;
      case "D":
        precioFinal = precioFinal + 50;
        break;
      case "E":
        precioFinal = precioFinal + 30;
        break;
      case "F":
        precioFinal = precioFinal + 10;
        break;

      default:
        break;
    }

    if (tamano < 20) {
      precioFinal = precioFinal + 10;
    } else if (tamano >= 20 && tamano < 50) {
      precioFinal = precioFinal + 50;
    } else if (tamano >= 50 && tamano < 80) {
      precioFinal = precioFinal + 80;
    } else if (tamano >= 80) {
      precioFinal = precioFinal + 100;
    }
    return precioFinal;
  }
  
}

class Lavadora extends Electrodomestico {
   constructor (precioBase, color, consumoEnergetico, peso, carga){
      super(precioBase, color, consumoEnergetico, peso)
      this.carga = carga || 5;
   }

   precioFinal(){
      let precioLavadora = super.precioFinal();
      if (this.carga >= 30) {
         precioLavadora += 50;
         }
         return precioLavadora;
   }

}

class Television extends Electrodomestico {
   constructor (precioBase, color, consumoEnergetico, peso, resolucion, is_4k){
      super(precioBase, color, consumoEnergetico, peso)
      this.resolucion = resolucion || 20;
      this.is_4k = is_4k || false;
   }

   precioFinal(){
      let precioTelevision = super.precioFinal();
      if (this.resolucion > 40 && this.is_4k === true){
         precioTelevision = (precioTelevision*1.3)+50;
      }else
      if(this.resolcion > 40){
         precioTelevision = (precioTelevision*1.3)
      }else
      if(this.is_4k === true){
         precioTelevision+=50;
      }
      return precioTelevision;
   }
}


function mainApp() {
   const electrodomesticos = [
      new Lavadora(400, "marronmierda", "X", 30, 10),
      new Television(600, "blanco", "B", 10, 50, true),
      new Electrodomestico(200, "rojo", "C", 15),
      new Lavadora(350, "azul", "F", 25, 7),
      new Television(800, "azul", "A", 20, 32, false),
      new Electrodomestico(150, "gris", "E",  12),
      new Lavadora(300, "blanco", "C", 40, 15),
      new Television(700, "blanco", "A",  18, 42, true),
      new Electrodomestico(250, "negro", "C",  8),
      new Television(900, "negro", "A",  22, 55, true),
    ];
    
    let precioTotalElectrodomesticos = 0;
    let precioTotalLavadoras = 0;
    let precioTotalTelevisiones = 0;
    
    for (const electrodomestico of electrodomesticos) {
      const precio = electrodomestico.precioFinal();
      precioTotalElectrodomesticos += precio;
    
      if (electrodomestico instanceof Lavadora) {
        precioTotalLavadoras += precio;
      } else if (electrodomestico instanceof Television) {
        precioTotalTelevisiones += precio;
      }
    }
    console.log(electrodomesticos)
    console.log(`Precio total de Electrodomésticos: ${precioTotalElectrodomesticos}`);
    console.log(`Precio total de Lavadoras: ${precioTotalLavadoras}`);
    console.log(`Precio total de Televisores: ${precioTotalTelevisiones}`);

}

mainApp();