var beers = ['tatra', 'perła', 'vip', 'żywiec', 'tyskie', 'pan i pani', 'kormoran'];

/*for (var i = 0; i < 4; i++){
    console.log(beers[i]);
}*/


//po kolei
//for (var i = 0; i < beers.lenght; i++){
   //  console.log(beers[i]);
//}


//od konca
beers.lenght = 7;
for (var i = beers.lenght -1; i >= 0; i--){
 console.log(beers[i]);
}


//var numbers = [];

//for (var i = 0; 1 < 10; i++){
  //  var randomNumber = Math.random();
    //numbers[i] = randomNumber;
//}

//console.log(numbers);


var numbers = [];

for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * 100 + 1);
    numbers[i] = randomNumber;

}
    console.log(numbers);

