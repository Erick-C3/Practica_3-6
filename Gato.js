const Animal = require("./Animal");


class Gato extends Animal{
    huranio = false;
    constructor(nombre, edad, tamanio, huranio){
        super(nombre, edad, tamanio);
        this.huranio = huranio;
    }

    maullar(){
        console.log("maullando");
    }
}

module.exports = Gato;