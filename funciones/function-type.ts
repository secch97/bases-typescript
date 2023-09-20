(() => {
  const addNumber = (a: number, b: number) => {
    return a + b;
  };

  const greet = (name: string) => {
    return `Hola ${name}`;
  };

  const saveTheWorld = () => {
    return "El mundo está salvado";
  };

  //*let myFunction:Function;
  //*let myFunction : (x:number, y:number)=>number;
  //*let myFunction : (x:string)=>string;
  let myFunction : ()=>string;

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
