console.log('lev1_1: for loop Hello World');

let text='Hello World';

for (let i = 1; i <=10; i++){
    console.log(`${text} ${i} `);
}

console.log('')
console.log('')
console.log('lev1_2: for loop Array');

let numArray = [];
let i = 0;
for ( i = 0; i <=10; i++){
    // console.log(i);
    numArray.push(i);
    console.log(numArray);
  
}

console.log('')
console.log('')
console.log('lev1_4: for loop Namen');

const names=['George', 'Annas', 'Elain', 'Hakan', 'Eric','Kim','Sergio'];
for(let i=0; i<names.length; i++){
  console.log(names[i]);
}

console.log('')
console.log('')
console.log('lev1_6: for loop Array');

const retArray=[];

for (let i=0; i< 100; i++) {
  retArray.push(` image_${i}.jpg`);
  console.log(retArray);
}

console.log('')
console.log('')
console.log('lev1_7: do while');

let j=0;
do{
  console.log(`The number is ${j}`);
}while (j<=5);
 

