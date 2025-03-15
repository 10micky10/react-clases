const person1 = {
  name: 'John',
  lastName: 'Snow',
  adress: {
    street: 'B. Galindo',
    number: 1547
  },
};

/*
"Copia mala de person1"
const person2 = person1; 
*/

// Copia del objeto "person1" con operador Spret
const person2 = { ...person1 };
person2.name = 'Ned';
person2.lastName = 'Stark';

console.log(person1);
console.log(person2);
