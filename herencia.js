const Animal = require("./Animal");
const Gato = require("./Gato");
const Perro = require("./Perro");


const unAnimal = new Animal("un nombre de un animal", 12, 1.5);
const unGato = new Gato("un nombre de un gato", 5, 0.5, true);
const unPerro = new Perro("un nombre de un perro", 5, 0.5, true);

//verificando regla ES UN
console.log(unGato instanceof Animal);


/* unPerro.comer();
unPerro.dormir();
unPerro.reproducirse();
unPerro.comoTeLlamas();
unPerro.darLaPatita();

unGato.comer();
unGato.dormir();
unGato.reproducirse();
unGato.comoTeLlamas();
unGato.maullar();

unAnimal.comer();
unAnimal.dormir();
unAnimal.reproducirse(); */