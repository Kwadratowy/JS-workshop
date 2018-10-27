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