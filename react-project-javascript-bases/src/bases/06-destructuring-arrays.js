// Desestructuracion de arrays
const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes;
console.log(p3);

// Desestructuracion de arrays con una funcion
const getArray = () => {
  return [
    "ABC",
    123
  ]
}
const [letras, numeros] = getArray();
console.log(letras);
console.log(numeros);

//Work
const usState = (valor) => {
  return [
    valor,
    () => { console.log("Hola mundo") }
  ]
}
const [nombre, setNombre] = usState("Goku");
console.log(nombre);
setNombre();
