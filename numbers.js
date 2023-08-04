


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


const restaurant = new Map();
restaurant.set('name', "SuperSushi");

console.log(restaurant);