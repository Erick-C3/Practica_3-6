class Animal {
    //Estados/caracteristicas
    nombre = "def nombre animal";
    edad = "def edad animal";
    tamanio = "def tamaño animal";
    peso = "def peso animal";
    tipoAlimentacion = "def tipo de alimentacion animal";
    enPeligroExtincion = false;

    /**
     * Inicializa un objeto Animal
     * @param {String} nombre del Animal
     * @param {Number} edad del Animal 
     * @param {Number} tamanio del Animal en metros
     */
    constructor(nombre, edad, tamanio){
        this.nombre = nombre;
        this.edad = edad;
        this.tamanio = tamanio;
    }

    comoTeLlamas(){
        console.log(this.nombre);
    }

    //Comportamientos
    dormir(){
        console.log("durmiendo");
    }

    /*
    //tal vez tendriamos que dudar
    morder(){
        console.log("morder");
    } */

    reproducirse(){
        console.log("reproducirse");
    }

    comer(){
        console.log("comiendo");
    }
}

module.exports = Animal;