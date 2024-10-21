// TIPOS DE DATOS COMPUESTOS ESTRUCTURADOS

// Objetos
console.log("OBJETOS");

const programador = {
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

for (const propieda in programador ){
    if(propieda === "cursos"){
        console.log(`Cursos de ${programador.nombre}:`)
        for(const curso of programador[propieda]){
            console.log(`- ${curso}`);
        }
    }
}

console.log(typeof(programador.viajeEuropa));
console.log(programador.viajeEstadosUnidos);

// ARRAYS
console.log("ARRAYS");
// Arreglo de numeros
const numeros: number[] = [1,2,3,4,5];

// Arreglo de cadenas de texto
const nombres: string[] = ["Juan", "Maria"];

// Arreglo de booleanos
const valoresBool: boolean[] = [true, false, true];

numeros.forEach((numeros) => console.log(numeros));

nombres.forEach((nombres) => console.log(nombres));

valoresBool.forEach((valoresBool) => console.log(valoresBool));

// ENUM
console.log("ENUM");

// Define de un enum para dias de la semana

enum DiasSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo,
}

enum Colores {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

// Object.value() devuelvedevuelve un array con los valores 
//del enum. Esto funciona especialmente bien para los 
//enums string como Colores.

// Object.entries() devuelve un array de pares [clave, valor]
Object.keys(DiasSemana)
    .filter((key) => isNaN(Number(key)))  // Filtrar claves numéricas
    .forEach((dia) => console.log(dia));

// Recorrer enum Colores usando Object.keys()
Object.keys(Colores).forEach((clave) => {
    console.log(`Clave: ${clave}, Valor: ${Colores[clave as keyof typeof Colores]}`);
});


//FUNCIONES
console.log("Funciones");

// Declaracion de funcion con tipado explicito:
function Sumar(a: number, b: number): number{
    return a + b;
}

// Funcion fleca con retorno implicito (inferido por Typescript)
const dividir = (a: number, b: number) => a / b;

// Funciones con parametros opcionales
function Saludar(nombre: string, edad?: number): string{
    if (edad !== undefined){
        return `Hola mi nombre es ${nombre} y tengo ${edad} años.`;
    }
    else {
        return `Hola, mi nombre es ${nombre}`;
    }
}

// Funciones con parametros por defecto
function Saludar2 (nombre: string, edad: number = 30): string {
    return `Hola, mi nombre es ${nombre} y tengo ${edad}.`;
}

console.log(Sumar(10,20));
console.log(dividir(10,20));
console.log(Saludar("Juan", 30));
console.log(Saludar2("Jona", 21));
