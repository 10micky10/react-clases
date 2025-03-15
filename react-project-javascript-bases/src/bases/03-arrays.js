const array1 = [1, 2, 3, 4];
// Copia del array sin modificar el array1
const array2 = [...array1, 5];

const array3 = array2.map((number) => {
  return 2 * number;
});

console.log(array1);
console.log(array2);
console.log(array3);
