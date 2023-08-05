

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