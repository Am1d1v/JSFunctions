

/*

const orders = new Set([
    'Sushi',
    'Hamburger',
    'Tempura',
    'Kebab', 
    'Sushi'
]);


console.log(orders);
console.log(orders.has('Sushi'));
console.log(orders.has('Pizza'));

orders.add('Some Food');
//console.log(new Set('Hello'));

for (const order of orders){
    console.log(order);
}

const foodOrder = [...orders];
console.log(foodOrder);

*/

// forEach for Map

const curriences = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['CNY', 'Chinese yuan']
]);


curriences.forEach((value, key, map) => {
    //console.log(value, key, map);
});


// forEach for Set

const orders = new Set([
    'Sushi',
    'Hamburger',
    'Tempura',
    'Kebab', 
    'Sushi',
    'Pizza'
]);

orders.forEach((key, _, set) => {
    console.log(key, set)
})