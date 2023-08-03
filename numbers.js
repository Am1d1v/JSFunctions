

const airline = {
    name: 'SkyAirLine',
    airlineCode: 'Code',
    bookings: [],

    book(flightNumber, passangerName){
        console.log(`${passangerName} has booked a ticket on ${this.name} flight ${flightNumber}`);
    }
}

airline.book(111, 'PersonName1 PersonSecondName1');
airline.book(122, 'PersonName2 PersonSecondName2');