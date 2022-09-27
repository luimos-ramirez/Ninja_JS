class Ninja {

    constructor(nombre, salud, velocidad, fuerza) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName() {
        return this.nombre;
    }
    showStats() {
        return `
        Nombre: ${this.nombre}
        Fuerza: ${this.fuerza}
        Velocidad: ${this.velocidad}
        Salud: ${this.salud}
        `
    }
    drinkSake() {
        return this.salud + 10;
    }
}
const ninja1 = new Ninja("Luisa", 75);

console.log(ninja1.sayName());
console.log(ninja1.showStats());
console.log(ninja1.drinkSake());

