import { getHeroeByID } from "./07-imports-exports";
/*const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeByID(2);
    resolve(heroe);
    reject("No se puede encontrar el heroe");
  }, 5000);
});

promesa.then((heroe) => {
  console.log(heroe);
}).catch((err) => {
  console.warn(err);
});*/

const getHeroeByIDAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeByID(id);
      heroe ? resolve(heroe) : reject("No se puede encontrar el heroe");
    }, 2000);
  });
}
/*getHeroeByIDAsync(200)
  .then((heroe) => {
    console.log(heroe);
  }).catch((err) => {
    console.warn(err);
  });*/

getHeroeByIDAsync(2)
  .then(console.log)
  .catch(console.warn);

