const name = 'Miguel';
const lastName = 'Aguilar';
const fullName = `${name} ${lastName}`;

const getSaludo = (fullName) => {
  return `Hola ${fullName}`;
}

console.log(getSaludo(fullName));
