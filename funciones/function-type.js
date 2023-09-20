"use strict";
(() => {
    const addNumber = (a, b) => {
        return a + b;
    };
    const greet = (name) => {
        return `Hola ${name}`;
    };
    const saveTheWorld = () => {
        return "El mundo está salvado";
    };
    //*let myFunction:Function;
    //*let myFunction : (x:number, y:number)=>number;
    //*let myFunction : (x:string)=>string;
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
