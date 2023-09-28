namespace Validations {
    export const validateText = (text:string):boolean => {
        if(text.length>3){
            return true;
        }
        else{
            return false;
        }
    }

    export const validateDate = (myDate:Date):boolean =>{
        return(isNaN(myDate.valueOf()) ? true:false) 
    }
}

console.log(Validations.validateText("Saul"));