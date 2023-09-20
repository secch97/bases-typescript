"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L Jackson",
        ironman: "Robet Downey Jr",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500.9898
    };
    const { poder, vision } = avengers;
    const printAvenger = (_a) => {
        var { ironman } = _a, rest = __rest(_a, ["ironman"]);
        console.log(ironman, rest);
    };
    printAvenger(avengers);
    const avengersArr = ["Capitan America", "IronMan", "Hulk"];
    const [, ironman,] = avengersArr;
    console.log({ ironman });
})();
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armor suit"
    };
    const capAmerica = {
        name: "Captain America",
        weapon: "Shield"
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir"
    };
    const avengers = [ironman, thor, capAmerica];
    //* FOR OF:
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
//# sourceMappingURL=main.js.map