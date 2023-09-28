"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        if (text.length > 3) {
            return true;
        }
        else {
            return false;
        }
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf()) ? true : false);
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText("Saul"));
//# sourceMappingURL=main.js.map