// TIPOS DE DATOS COMPUESTOS ESTRUCTURADOS
// Objetos
console.log("OBJETOS");
var programador = {
    nombre: "Jona",
    casado: false,
    cursoEnYoutube: 3,
    cursos: ['HTML', 'CSS', 'REACT', 'C#'],
    viajeEuropa: undefined,
    viajeEstadosUnidos: null
};
// Mostramos los datos
console.log(programador.nombre);
console.log(programador.casado);
console.log(programador.cursoEnYoutube);
for (var propieda in programador) {
    if (propieda === "cursos") {
        console.log("Cursos de ".concat(programador.nombre, ":"));
        for (var _i = 0, _a = programador[propieda]; _i < _a.length; _i++) {
            var curso = _a[_i];
            console.log("- ".concat(curso));
        }
    }
}
console.log(typeof (programador.viajeEuropa));
console.log(programador.viajeEstadosUnidos);
// ARRAYS
console.log("ARRAYS");
// Arreglo de numeros
var numeros = [1, 2, 3, 4, 5];
// Arreglo de cadenas de texto
var nombres = ["Juan", "Maria"];
// Arreglo de booleanos
var valoresBool = [true, false, true];
numeros.forEach(function (numeros) { return console.log(numeros); });
nombres.forEach(function (nombres) { return console.log(nombres); });
valoresBool.forEach(function (valoresBool) { return console.log(valoresBool); });
// ENUM
console.log("ENUM");
// Define de un enum para dias de la semana
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Miercoles"] = 2] = "Miercoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
    DiasSemana[DiasSemana["Sabado"] = 5] = "Sabado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
var Colores;
(function (Colores) {
    Colores["Rojo"] = "Rojo";
    Colores["Verde"] = "Verde";
    Colores["Azul"] = "Azul";
})(Colores || (Colores = {}));
// Object.value() devuelvedevuelve un array con los valores 
//del enum. Esto funciona especialmente bien para los 
//enums string como Colores.
// Object.entries() devuelve un array de pares [clave, valor]
Object.keys(DiasSemana)
    .filter(function (key) { return isNaN(Number(key)); }) // Filtrar claves numéricas
    .forEach(function (dia) { return console.log(dia); });
// Recorrer enum Colores usando Object.keys()
Object.keys(Colores).forEach(function (clave) {
    console.log("Clave: ".concat(clave, ", Valor: ").concat(Colores[clave]));
});
//FUNCIONES
console.log("Funciones");
// Declaracion de funcion con tipado explicito:
function Sumar(a, b) {
    return a + b;
}
// Funcion fleca con retorno implicito (inferido por Typescript)
var dividir = function (a, b) { return a / b; };
// Funciones con parametros opcionales
function Saludar(nombre, edad) {
    if (edad !== undefined) {
        return "Hola mi nombre es ".concat(nombre, " y tengo ").concat(edad, " a\u00F1os.");
    }
    else {
        return "Hola, mi nombre es ".concat(nombre);
    }
}
// Funciones con parametros por defecto
function Saludar2(nombre, edad) {
    if (edad === void 0) { edad = 30; }
    return "Hola, mi nombre es ".concat(nombre, " y tengo ").concat(edad, ".");
}
console.log(Sumar(10, 20));
console.log(dividir(10, 20));
console.log(Saludar("Juan", 30));
console.log(Saludar2("Jona", 21));
