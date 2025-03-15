// Destructuring

const person = {
  username: 'Walter',
  lastname: 'White',
  age: 48
};

const { username: name, lastname, age } = person;

console.log(name);
console.log(lastname);
console.log(age);

// Desestructuracion en una funcion
// Asigna un atributo mas al objeto
const getPerson = ({ username, lastname, age, dni = "654785" }) => {
  console.log(username, lastname, age, dni);
}

getPerson(person);

// Desestructuracion en una funcion
// Con return
const usContext = ({ username, age }) => {
  return {
    nombre: username,
    old: age
  };
};

const { nombre, old } = usContext(person);

console.log(nombre, old);

// Desestructuracion objetos anidados
const getDireccion = ({ username }) => {
  return {
    userNombre: username,
    latLng: {
      lat: "5489",
      lng: "555444"
    }
  };
};

// const { userNombre, latLng: { lat, lng } } = getDireccion(person);
const { userNombre, latLng } = getDireccion(person);
const { lat, lng } = latLng;
console.log(userNombre, lat, lng);
