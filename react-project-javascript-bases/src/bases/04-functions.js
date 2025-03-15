// Forma de declarar las funciones
// Siempre con constantes
const saludar = function (name) {
  return `Hola ${name}`;
};

const saludar2 = (name) => {
  return `Hola ${name}`;
};

const saludar3 = (name) => `Hola ${name}`;

const saludar4 = () => `Hola mundo`;

console.log(saludar("Walter"));
console.log(saludar2("Jesse"));
console.log(saludar3("Hank"));
console.log(saludar4());

const getActiveUser = (name) => ({
  UUID: 'ABC123',
  username: name
});

const activeUser = getActiveUser("Walter");
console.log(activeUser);
