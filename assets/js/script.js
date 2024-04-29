function obtenerDigimonPromesas(){
    return new Promise(function(resolver,rechazar){
        fetch(`https://digimon-api.vercel.app/api/digimon`)
        .then(function(digimones){
            if(!digimones.ok){
                throw new Error("Error po loco");
            }
            return digimones.json();
        })
        .then(function(data){
            resolver(data);
        })
        .catch((error)=>{
            rechazar(`El error es: ${error}`);
        })

    })
}

obtenerDigimonPromesas()
    .then((digimones) =>{
        digimones.map((digimon) =>{
            console.log(digimon);
        })
    })
    .catch((error)=>{
        console.log(`El error es: ${error}`);
    })