// DEFINIDOS POR EL USUARIO

// CLASES
console.log("CLASES");

class Persona {
    // Propiedad
    nombre: string;
    // Constructor
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    // Metodo
    Saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
}

// Instanciamos el objeto
const Persona1 = new Persona("Jona");

// Mostramos la propiedad y metodo de la clase Persona
console.log(Persona1.nombre);
Persona1.Saludar();

// INTERFACES
console.log("INTERFACES");

// Interdace basica
interface Ipersona {
    nombre: string;
    edad: number;
}

// Interface con propiedades opcionales
interface Iproducto {
    nombre: string;
    precio: number;
    descripcion?: string;
}

// Interface para funciones
interface Icomparador {
    (a: number, b: number): boolean;
}

// Interface para clases (class interfaces)
interface ICpersona {
    nombre: string;
    edad: number;
    Saludar(): void;
}

// creamos las interfaces

const personaI: Ipersona = {
    nombre: "Jona",
    edad: 21,
};
console.log(`Nombre: ${personaI.nombre} edad: ${personaI.edad}`);

const productoI: Iproducto = {
    nombre: "Silla",
    precio: 1200,
    descripcion: "",
};
console.log(productoI);

const comparar: Icomparador = (a, b) => a > b;

console.log(comparar(5,3));

const icPersona: ICpersona = {
    nombre: "Yona",
    edad: 21,
    Saludar() {
        console.log(`Hola ${this.nombre} edad ${this.edad}`);
    },
};

icPersona.Saludar();

// TYPES
console.log("TYPE");
// Type basico
type Numero = number;

// Type basico objeto literal
type Persona1 = {
    nombre: string;
    edad: number;
};

// Type con union types
type  Nombre = string | null;

// Type con propiedades opcionales
type Producto1 = {
    nombre: string;
    precio: number;
    descripcion?: string;
};

// Type para funciones
type Comparador1 = {
    (a: number, b: number): boolean;
};

// Type para clase (class Types)
type Persona2 = {
    nombre: string;
    edad: number;
    saludar(): void;
};

const numero: Numero = 10;

console.log(numero);

const producto: Producto1 = {
    nombre: "Mesa",
    precio: 25000,
    descripcion: "Hola", 
};

console.log(producto);

const comparador: Comparador1 = (a, b) => a > b;
console.log(comparar(5, 3)); // true

const persona2: Persona2 = {
    nombre: "Pedro",
    edad: 34,
    saludar() {
        console.log(`Hola ${this.nombre} edad: ${this.edad}.`);
    },
};

console.log(persona2.nombre);
persona2.saludar();