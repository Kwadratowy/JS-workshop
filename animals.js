var animals = [
    'panda', 'koala', 'leniwiec', 'lama', 'nosacz', 'dziobak', 'alpaka', 'kaczka', 'kuna', 'kot','szop', 'nutria',
    'jednorozec', 'kon', 'kangur', 'sikieratka', 'miodozer',
    'kapibara', 'waran', 'fenek'
  ];

  var myAnimals = [];
  for (var i = 0; i < 5; i++) {
    var howManyAnimals = animals.length;
    var index = Math.floor(Math.random() * howManyAnimals);
    myAnimals[i] =animals[index];
  }

  console.log(myAnimals);


  var pada = false;
  var jestWeekend


  var numbers = [];
  
  for (i=0;i < 10; i++){
    numbers[i] = Math.random();
  }

  console.log(numbers);
  
  var fraza = 'ala ma kota a kot ma pchły';
  /*var fraza2 = '';

  //for (var i = fraza.length -1; i >= 0; i--){
   // console.log(fraza[i]);
 // }

 for (var i = fraza.length -1; i >= 0; i--){
   fraza2 = fraza2 + fraza[i];
   //fraza2 += fraza[i];
 }
 console.log(fraza2);*/


//var numbers = [];
//for (var i = 0; i < 10; i++){
// ten blok wykona się 10 razy
 // for (var k = 0; k < 10; k++){
   // console.log(i, k);
//  }
//}

var stars = [];

for (var i = 0; i < 10; i++){
  stars[i] = [];
  for (var k = 0; k < 10; k++){
    if (i % 2 === 0 && k % 2 === 0){
      stars[i][k] = '*';
    } else {
      stars[i][k] = '-';
    }
  }
}

console.log(stars)


var starsString = '';

for (var i = 0; i < 10; i++){
  for (var k = 0; k < 10; k++){
    starsString += stars[i][k];
    if (k === 9) {
      starsString += '\n'; // \n = ne line
    }
  }
}

console.log(starsString);


var numbers = [];
var i = 0

while(i < 10) {
  numbers[i] = Math.floor(Math.random() * 100);
  i++;
}
console.log(numbers);


var string = 'ala ma kota';
//szukamy indeksu k


for (var i = 0; i < string.length; i++){
  if (string[i] === 'k'){
    console.log('k jest na pozycji = ', i);
    break;
  }  
}

var numbers = [];
var  i = 0;

while (i < 10){
  var randNumber = Math.floor(Math.random() * 100 + 1);
 // if (randNumber >= 50) {
  //  continue;
 // 
 if (randNumber >= 50) {
    break;
}
   numbers[i] = randNumber;
  i++;
}

  console.log(numbers);


  var numbers = [1, 2, 3, 4, 5,];
  numbers.unshift(0);
  numbers.push(6);
  numbers.shift();
  numbers.pop();
  
  console.log(numbers);
