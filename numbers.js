


/*


const book = function(flightNumber, passangerName){
    console.log(`${passangerName} has booked a ticket on ${this.name} flight ${flightNumber}`);

    this.bookings.push({flight: `${this.airlineCode}${flightNumber}, ${passangerName}`});
}

const airlineOne = {
    name: 'SkyAirLine',
    airlineCode: 'CodeAirlineOne',
    bookings: [],

}

const airlineTwo = {
    name: 'SkyAirLine',
    airlineCode: 'CodeAirlineTwo',
    bookings: [],

}


book.call(airlineOne, 121, "SomeOneName1 SomeOneSecondName1");
book.call(airlineTwo, 124, "SomeOneName2 SomeOneSecondName2");

const flightData = [111, 'SomeOneName3 SomeOneSecondName3'];

book.apply(airlineOne, flightData);

console.log(`Airline One Bookings` + JSON.stringify(airlineOne.bookings));
console.log(`Airline Two Bookings` + JSON.stringify(airlineTwo.bookings));

*/

/*

const book = function(flightNumber, passangerName){
    console.log(`${passangerName} has booked a ticket on ${this.name} flight ${flightNumber}`);

    this.bookings.push({flight: `${this.airlineCode}${flightNumber}, ${passangerName}`});
}


const airlineOne = {
    name: 'SkyAirLineOne',
    airlineCode: 'CodeAirlineOne',
    bookings: [],

    book: function(flightNumber, passangerName){
        console.log(`${passangerName} has booked a ticket on ${this.name} flight ${flightNumber}`);
    
        this.bookings.push({flight: `${this.airlineCode}${flightNumber}, ${passangerName}`});
    }
    

}

const airlineTwo = {
    name: 'SkyAirLineTwo',
    airlineCode: 'CodeAirlineTwo',
    bookings: [],
}

const airlineThree = {
    name: 'SkyAirLineThree',
    airlineCode: 'CodeAirlineThree',
    bookings: [],
}

const bookedAirline2 = book.bind(airlineTwo);
bookedAirline2(256, 'Name1 Surname1');
console.log(airlineTwo);

const bookedAirline3 = book.bind(airlineThree);
bookedAirline3(345, 'Name2 Surname2');

const bookedAirline3Flight1 = book.bind(airlineThree, 111);
bookedAirline3Flight1('Name4 Surname4');
bookedAirline3Flight1('Name5 Surname5');

console.log(airlineThree);


// Bind with eventListeners

airlineOne.airPlanes = 200;
airlineOne.purchaseAirplane = function(){
    this.airPlanes++;
    console.log(`We now have ${this.airPlanes} planes`);
}

const purchaseBtn = document.querySelector('#purchasePlane');
purchaseBtn.addEventListener('click', airlineOne.purchaseAirplane.bind(airlineOne));

*/

//   IIFE

/*

const runOneTime = function(){
    console.log('Launched One Time');
}

*/

//runOneTime();

/*

(function(){
    console.log('Launched One Time');
})();

(() => console.log('Arrow Function Run One Time'))();

*/


/*

const restaurant = new Map();
restaurant.set('name', "SuperSushi");
restaurant.set(1, 'London, England');
restaurant.set(2, 'Berlin, Germany');

restaurant
    .set('foodCategories', [
    'Japanese Food',
    'Street Food',
    'Fruits'
    ])
    .set('open', 10)
    .set('close', 23)
    .set(true, 'Restaurant is open')
    .set(false, 'Restaurant is closed');

console.log(restaurant.get('name'));    

console.log(restaurant);


const currentTime22 = 22;
const currentTime09 = 9;

console.log(restaurant.get(currentTime22 > restaurant.get('open') && currentTime22 < restaurant.get('close')));
console.log(restaurant.get(currentTime09 > restaurant.get('open') && currentTime09 < restaurant.get('close')));

console.log(restaurant.size);
restaurant.delete(2);
console.log(restaurant.size);
console.log(restaurant);

const arr = [1, 2, 3];

restaurant.set( arr, 'Some Restaurant Data');
console.log(restaurant.get(arr));

*/

const question = new Map([
    ['question', 'What is your name ?'],
    [1, 'Name1'],
    [2, 'Name2'],
    [3, 'Name3'],
    ['correctAnswer', 1],
    [true, 'Correct Answer'],
    [false, 'Incorrect Answer']
]);

/*

for (const item of question){
    console.log(item);
}

*/

for (const [key, value] of question){
    if (typeof key === 'number'){
        console.log(key, value);
    }
}










