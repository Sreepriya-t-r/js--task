// You have an array of items in a shopping cart, each with a price and quantity.
//Write a function to calculate the total price, applying a 10% discount if the total is above 100.

const cart = [
  { item: "Laptop", price: 800, quantity: 1 },
  { item: "Mouse", price: 20, quantity: 2 },
  { item: "Keyboard", price: 50, quantity: 1 },
];

const tot = cart.reduce((a, b) => a + b["price"] * b["quantity"], 0);
console.log(tot);
console.log(tot >= 100 ? tot - tot * 0.1 : tot);

// Smart Traffic Light
// A traffic light changes based on car density:
// High traffic → green light for 60 seconds
// Medium traffic → green light for 40 seconds
// Low traffic → green light for 20 seconds
// Write a function that takes the number of cars and returns the green light duration.

// Example:-
// console.log(trafficLight(100)); // Output: 60 seconds
// console.log(trafficLight(30));  // Output: 40 seconds
// console.log(trafficLight(5));   // Output: 20 seconds

function trafficLight(cars) {
  if (cars >= 50) {
    return "60 seconds";
  } else if (cars >= 20) {
    return "40 seconds";
  } else {
    return "20 seconds";
  }
}
console.log(trafficLight(1000));
