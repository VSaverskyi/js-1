// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "RepairDroid";
// pricePerItem += 1500;

// console.log(`${productName} coasts ${pricePerItem} credits.`);

/*const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;

console.log(topSpeed, distance, login, isOnline, isAdmin);*/

/*const pricePerItem = 3500;
const orderedQuantity = 4;
const totalPrice = pricePerItem * orderedQuantity;

console.log(totalPrice);*/

/*const productName = "Droid";
const pricePerItem = 3500;
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

console.log(message);*/

/*const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

console.log(message);*/

/*function sayHi() {
  console.log("Hello, this is my first function!");
}
sayHi();*/

/*function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);*/

/*function add(a, b, c) {
  return a + b + c;
}
add(2, 5, 8);

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));*/

/*function makeMessage(name, price) {
  const message = `You picked ${name}, price per item is ${price} credits`;
  return message;
}
console.log(makeMessage("product", 500));*/

/*function calculateTotalPrice(orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;
  return totalPrice;
}
console.log(calculateTotalPrice(12, 10));*/

/*function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  return message;
}

console.log(makeOrderMessage(5, 20, 50));*/

/*function isAdult(age) {
  const passed = age >= 18;
  return passed;
}

console.log(
  isAdult(14) === true ? "This man is adult" : "This man is not adult"
);*/

/*function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  const isMatch = password === SAVED_PASSWORD;
  return isMatch;
}

console.log(isValidPassword("jqueryismyjam"));*/

/*function checkAge(age) {
  let message;

  if (age >= 18) {
    // Change this line
    message = "You are an adult";
  } else {
    message = "You are a minor";
  }

  return message;
}

console.log(checkAge(19));*/

/*function checkStorage(available, ordered) {
  let message;
  if (ordered > available) {
    message = "Not enough goods in stock!";
  } else {
    message = "Order is processed, our manager will contact you.";
  }
  return message;
}
console.log(checkStorage(19, 15));*/

/*let a = 5;
let b = 10;
let c = 15;
let d = 20;
a += 2;
b -= 4;
c *= 3;
d /= 10;

console.log(a, b, c, d);*/

/*function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }
  // Change code above this line
  return message;
}

console.log(makeTransaction(600, 2, 1100));*/

/*function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    // Change this line
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    // Change this line
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
}

console.log(checkPassword(null));*/

/*function checkStorage(available, ordered) {
  let message;
  if (ordered === 0) {
    message = "There are no products in the order!";
  } else if (ordered > available) {
    message = "Your order is too large, there are not enough items in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
  return message;
}

console.log(checkStorage(25, 0));*/

/*function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line

  return isInRange;
}

console.log(isNumberInRange(15, 29, 121));*/
