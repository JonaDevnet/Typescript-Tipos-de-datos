// TIPOS DE DATOS PRIMITIVOS EN TYPESCRIPT

// STRING
console.log('TIPOS DE DATOS: STRING');

// Comillas dobles:
const str1: string = "Hola soy una cadena con comillas dobles";
// Comillas simples
const str2: string = 'Hola soy una cadena con comillas simples';

console.log(str1);
console.log(str2);

// Template literals (backticks)
const nombre: string = 'Juan';
const edad: number = 30;

const str3: string = `Hola, mi nombre no es ${nombre} y no tengo ${edad} años.`;

console.log(str3);

// NUMEROS
console.log('TIPOS DE DATOS NUMEROS');

// Numeros enteros
const num1: number = 10;
//Notacion exponencial
const num2: number = 2.5e3;
// Notacion exponencial negativa
const num3: number = 1.5e-2;
//Hexadecimal (base 16) prefijo "0x"
const num4: number = 0xA;
// Octales (base 8) prefijo 0o
const num5: number = 0o12;
// Binatios (base 2) prefijo 0b
const num6: number = 0b1010;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

// BOOLEANS

// Valor boolean true
const bool1: boolean = true;
// Valor boolean false
const bool2: boolean = false;

console.log(bool1);
console.log(bool2);

// UNDEFINED

//Declaracion de una variable con valor undefined
let variableUndefined: undefined;

// Asignacion de valor undefined
variableUndefined = undefined;

console.log(variableUndefined);

// NULL

//Declaracion de una variable con valor null
let variableNull: null;

// Asignacion de valor null
variableNull = null;

console.log(variableNull);