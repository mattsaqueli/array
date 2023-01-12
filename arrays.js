var friends = ["Matt", "Sarah", "Devon", "Justin"];
var eggPrices = [10, 15, 20, 25];
var paidFee = [true, true, false, false];

// The pop method will remove the last name in the array, Justin.
friends.pop();
console.log(friends);
// The shift method will remove the first element from the array.
eggPrices.shift(1);
console.log(eggPrices);
// The push method will add on another false at the end of the array.
paidFee.push(false);
console.log(paidFee);
