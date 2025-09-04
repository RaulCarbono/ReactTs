import { heroes, Owner } from "../data/heroes.data";

export const getHeroesByOwner = (owner : Owner) => {
    
    const heroesByOwner = heroes.filter((hero) => hero.owner == owner)
        return heroesByOwner         
    }


