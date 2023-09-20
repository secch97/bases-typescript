(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: (string | number | Hero) = "Saul";
  console.log(myCustomVariable);

  myCustomVariable = 20;
  console.log(myCustomVariable);

  myCustomVariable  = {
    name: "Batman",
    age: 43,
    powers: ["Ninguno"],
  }
  console.log(myCustomVariable);
})();
