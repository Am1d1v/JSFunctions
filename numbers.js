



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



console.log(`Airline One Bookings` + JSON.stringify(airlineOne.bookings));
console.log(`Airline Two Bookings` + JSON.stringify(airlineTwo.bookings));