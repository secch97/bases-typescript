(()=>{

    class Avenger {
        static avgAge: number = 35;
        constructor(private name:string, public team:string, public realName?:string){
            
        }

        public bio() {
            return `${this.name} ${this.team}`
        }
    }

    const antman:Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
    //console.log(antman);
    //console.log(antman.bio());

})();