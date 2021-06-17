let input = 'My hovercraft is full of eels';

const vowels = ['a', 'i', 'u', 'e', 'o'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log('i is ' + i);
  for (let j = 0; j < vowels.length; j++) {
    //console.log('j is ' + j);
    if (input[i] === vowels[j]) {
      resultArray.push(input[i])
    };
  };
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  };
};

console.log(resultArray.join('').toUpperCase());
