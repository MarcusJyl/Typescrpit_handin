const fetch = require("node-fetch");

async function getPlanetforFirstSpeciesInFirstMovieForPerson(id){
    try{
        const name = await fetch('https://swapi.dev/api/people/' + id).then(res => res.json());
        
        const film = await fetch(name.films[0]).then(res => res.json());
        
        const species = await fetch(film.species[0]).then(res => res.json());
        const homeworld = await fetch(species.homeworld).then(res => res.json());
        return name.name + film.title + species.name + homeworld.name
    } catch(err){
        console.log(err);
    }
}

module.exports.getPlanetforFirstSpeciesInFirstMovieForPerson = getPlanetforFirstSpeciesInFirstMovieForPerson