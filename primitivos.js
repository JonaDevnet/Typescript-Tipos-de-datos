// TIPOS DE DATOS PRIMITIVOS EN TYPESCRIPT
// STRING
console.log('TIPOS DE DATOS: STRING');
// Comillas dobles:
var str1 = "Hola soy una cadena con comillas dobles";
// Comillas simples
var str2 = 'Hola soy una cadena con comillas simples';
console.log(str1);
console.log(str2);
// Template literals (backticks)
var nombre = 'Juan';
var edad = 30;
var str3 = "Hola, mi nombre no es ".concat(nombre, " y no tengo ").concat(edad, " a\u00F1os.");
console.log(str3);
// NUMEROS
console.log('TIPOS DE DATOS NUMEROS');
// Numeros enteros
var num1 = 10;
//Notacion exponencial
var num2 = 2.5e3;
// Notacion exponencial negativa
var num3 = 1.5e-2;
//Hexadecimal (base 16) prefijo "0x"
var num4 = 0xA;
// Octales (base 8) prefijo 0o
var num5 = 10;
// Binatios (base 2) prefijo 0b
var num6 = 10;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
// BOOLEANS
// Valor boolean true
var bool1 = true;
// Valor boolean false
var bool2 = false;
console.log(bool1);
console.log(bool2);
// UNDEFINED
//Declaracion de una variable con valor undefined
var variableUndefined;
// Asignacion de valor undefined
variableUndefined = undefined;
console.log(variableUndefined);
// NULL
//Declaracion de una variable con valor null
var variableNull;
// Asignacion de valor null
variableNull = null;
console.log(variableNull);
