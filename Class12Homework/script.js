class Animal {
    constructor (name, type, age, size){
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    
    }
    eat(animal){
        if(animal instanceof Animal){
            if(animal === 'herbivore')
                console.log(`The ${animal} is a herbivore and does not eat other animals`)
            if(animal !== 'herbivore'){
                animal.isEaten = true;
                console.log(`The animal ${this.name} ate the ${animal.name}`)
            }
            if(this.size = 2 * animal.size){
                console.log(`The animal ${this.name} tried to eat the ${animal.name} but it was too large.`)
            }
            if(animal !== this.Animal){
                console.log(`The animal ${this.Animal.name} is eating the ${animal}`)
            }
        }
        
    };
}

const animalsDb = {
    animals: [],

    generateBunny: function () {
        for (let i = 0; i < 10; i++) {
            this.addAnimal(new Animal(`Bunny${i}`, `herbivore`, Math.floor((Math.random() * 5) + 1), Math.floor((Math.random() * 5) + 1) ));
        }
    },

    generateWolf: function () {
        for (let i = 0; i < 10; i++) {
            this.addAnimal(new Animal(`Wolf${i}`, `carnivore`, Math.floor((Math.random() * 15) + 1), Math.floor((Math.random() * 31) + 10) ));
        }
    },

    generateElephant: function () {
        for (let i = 0; i < 10; i++) {
            this.addAnimal(new Animal(`Elephant${i}`, `herbivore`, Math.floor((Math.random() * 90) + 1), Math.floor((Math.random() * 2001) + 1000) ));
        }
    },

    generatePig: function () {
        for (let i = 0; i < 10; i++) {
            this.addAnimal(new Animal(`Pig${i}`, `omnivore`, Math.floor((Math.random() * 20) + 1), Math.floor((Math.random() * 31) + 20) ));
        }
    },

    
    addAnimal: function (animal) {
        this.animals.push(animal);
        
    },
}
animalsDb.generateBunny();
animalsDb.generateWolf();
animalsDb.generateElephant();
animalsDb.generatePig();
console.log(animalsDb.animals)