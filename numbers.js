

const airline = {
    name: 'SkyAirLine',
    airlineCode: 'Code',
    bookings: [],

    book(flightNumber, passangerName){
        console.log(`${passangerName} has booked a ticket on ${this.name} flight ${flightNumber}`);
    }
}