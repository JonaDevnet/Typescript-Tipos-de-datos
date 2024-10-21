// DEFINIDOS POR EL USUARIO
// CLASES
console.log("CLASES");
var Persona = /** @class */ (function () {
    // Constructor
    function Persona(nombre) {
        this.nombre = nombre;
    }
    // Metodo
    Persona.prototype.Saludar = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, "."));
    };
    return Persona;
}());
// Instanciamos el objeto
var Persona1 = new Persona("Jona");
// Mostramos la propiedad y metodo de la clase Persona
console.log(Persona1.nombre);
Persona1.Saludar();
// INTERFACES
console.log("INTERFACES");
var personaI = {
    nombre: "Jona",
    edad: 21,
};
console.log("Nombre: ".concat(personaI.nombre, " edad: ").concat(personaI.edad));
var productoI = {
    nombre: "Silla",
    precio: 1200,
    descripcion: "",
};
console.log(productoI);
var comparar = function (a, b) { return a > b; };
console.log(comparar(5, 3));
var icPersona = {
    nombre: "Yona",
    edad: 21,
    Saludar: function () {
        console.log("Hola ".concat(this.nombre, " edad ").concat(this.edad));
    },
};
icPersona.Saludar();
// TYPES
console.log("TYPE");
var numero = 10;
console.log(numero);
var producto = {
    nombre: "Mesa",
    precio: 25000,
    descripcion: "Hola",
};
console.log(producto);
var comparador = function (a, b) { return a > b; };
console.log(comparar(5, 3));
var persona2 = {
    nombre: "Pedro",
    edad: 34,
    saludar: function () {
        console.log("Hola ".concat(this.nombre, " edad: ").concat(this.edad, "."));
    },
};
console.log(persona2.nombre);
persona2.saludar();
