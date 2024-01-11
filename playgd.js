// const Nacer = {
//   name: 'Nacer',
// };

// const newNacer = {
//   name: Nacer.name,
// };

// Nacer.name = 'Nasser';

// console.log(Nacer);
// console.log(newNacer);

const colors = {
  // prop1: 'prop1',
  // prop2: 'prop2'
};

function genColor(name, colorHexa) {
  //   colors.name = name;
  //   colors.colorHexa = colorHexa;

  colors[name] = colorHexa;
}

genColor('superbe', '#FF10432');
genColor('arenciel', '#F010432');

console.log(colors);
