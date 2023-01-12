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


// Index positions are positions that the elements in the array are in.
// The firs element starts the count at 0 and increases by 1.
// Example: "Matt" is in index position 0.
// Example: "15" is in index position 1.