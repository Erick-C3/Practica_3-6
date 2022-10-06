const Animal = require("./Animal");

class Perro extends Animal{
    //estados
    esJugueton = false;
    //comportamientos
    constructor(nombre, edad, tamanio, esJugueto){
        super(nombre, edad, tamanio);
        this.esJugueton = esJugueto;
    }

    ladrar(){
        console.log("ladrando");
    }

    darLaPatita(){
        console.log("dando la patita");
    }
}

module.exports = Perro;