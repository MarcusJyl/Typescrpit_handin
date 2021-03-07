const { getPlanetforFirstSpeciesInFirstMovieForPerson } = require('./ex2')

async function get(){
    try{
        const data = await getPlanetforFirstSpeciesInFirstMovieForPerson(1);
        console.log(data)
    }catch(err){
        console.log(err)
    }finally{
        console.log("Done")
    }
}

get()