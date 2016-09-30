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
  if(money.currency_code != "USD"){
    console.log(money.title +" "+ money.currency_code +" "+ money.price);
  }

});


// //************QUESTION 4***************
// var itemsMaterial = items.filter(function(supplies) {
//     return supplies.materials == 'wood';
//
// });
// console.log(itemsMaterial);
//

var itemsMaterial = items.forEach(function(item){
  if(item.materials.indexOf("wood") > -1) {
    console.log(item.title);
  }
});

//************QUESTION 5*******************
var plusEight = items.filter(function(q){
  return q.materials.length >= 8;

});
console.log(plusEight);


//**************QUESTION 6*****************

var creator = items.filter(function(madeIt){
return madeIt.who_made == "i_did";


});
console.log(creator.length + " were made by their sellers");








}());
