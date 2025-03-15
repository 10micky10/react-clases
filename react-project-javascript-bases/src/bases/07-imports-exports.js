import heroes from "../data/heroes";

export const getHeroeByID = (id) => {
  return heroes.find((heroe) => heroe.id === id);
}

//console.log(getHeroeByID(2));

export const getHeroeByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
}

//console.log(getHeroeByOwner("DC"));
//console.log(owners);
