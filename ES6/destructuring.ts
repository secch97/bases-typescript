(()=>{
    type Avengers = {
        nick: string,
        ironman: string,
        vision: string, 
        activo: boolean,
        poder: number,
    }

    const avengers:Avengers = {
        nick: "Samuel L Jackson",
        ironman: "Robet Downey Jr",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500.9898
    };
    const {poder, vision} = avengers;


    const printAvenger = ({ironman, ...rest}:Avengers):void =>{
        console.log(ironman, rest);
    }

    printAvenger(avengers);

    const avengersArr:string[] = ["Capitan America", "IronMan", "Hulk"];
    const [, ironman,] = avengersArr;
    console.log({ironman})
})();