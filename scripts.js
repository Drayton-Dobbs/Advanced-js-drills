name = 'Drayton';
var name;
console.log(name);
setName();
function setName() {
    var name = 'Covalence';
    console.log(name);
}


console.log('starting');
let avg = findAvg(2,2);
console.log('getting closer', avg)
function findAvg(a, b) {
    console.log('in function');
    var answer = (a + b) / 2;
    return answer;
}

fruits = ['strawberries', 'kiwi', 'grapes'];

function fruitOne() {
   let favFruit = fruits[1]
    console.log(fruits[0]);

    function realFavFruit() {
        console.log(favFruit);
    }
}


function printFruits() {
    let favFruit = fruits[1];
    let leasFav = 'fig'
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }

    printFavFruit();
    
}

console.log(leasFav);
printFruits();


whatever();
function whatever() {
    console.log('Hello');
}

alert();
function msg() {
    alert('whoaa there!');
}


