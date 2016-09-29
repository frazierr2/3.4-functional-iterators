(function () {
  "use strict";


//***********QUESTION 1************
var sum = items.reduce(function(total, num){ return total + num.price }
  , 0);

console.log('The average price is '+ '$'+ (sum/items.length).toFixed(2));


//***********QUESTION 2*****************
var newArray = items.filter(function(num){
  return num.price > 14 &&  num.price < 18});
console.log(newArray);


//********QUESTION 3******************
var money = items.map(function(money){
  console.log(money.currency_code);
});









}());
