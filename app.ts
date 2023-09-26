// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
  encender:boolean;
  velocidadMaxima:number;
  acelerar: ()=>void;
};

const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

console.log(conducirBatimovil(batimovil));

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Joker {
  reir?: boolean;
  comer?:boolean;
  llorar?:boolean;
}

const guason:Joker = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Joker ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}

reir(guason);


// Cree una interfaz para la siguiente funcion

interface CiudadGotica {
  (ciudadanos:string[]):number
}

const ciudadGotica:CiudadGotica = (ciudadanos) => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface IPersona {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio: ()=>void;
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements IPersona {
  constructor (public nombre:string, public edad:number, public sexo:string, public estadoCivil:string){

  }

  imprimirBio() {
    console.log("Persona")
  }
}