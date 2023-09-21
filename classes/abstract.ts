(()=>{
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string,
        ){

        }
    }

    class Xmen extends Mutante {

    }

    const wolverine:Xmen= new Xmen("Wolverine", "Logan");
    //console.log(wolverine);

})();