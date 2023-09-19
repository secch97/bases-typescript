(()=>{
    const fullName = (firstName: string, ...restArgs: string[]) : string => {
        return `${firstName} ${restArgs.join(" ")}`;
    }

    console.log(fullName("Clark", "Kent"));

})();