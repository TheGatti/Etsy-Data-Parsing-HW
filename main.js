// code goes here :)
//answer 1
var prices = items.map(function (element,idx,arr) {
  return element.price;
});
console.log (prices)
function sum(arr) {
   var sumOfNums = 0;
   for (var i = 0; i < arr.length; i++) {
     sumOfNums = sumOfNums + arr[i]
     }
   return sumOfNums;
 }
sum(prices) / prices.length
document.getElementById("answer1").innerHTML= sum(prices) / prices.length;

//answer 2
var middleFilter = items.filter (function (element,idx,arr) {
  return element.price >= 14.00 && element.price <= 18.00 && element.currency_code === "USD"
}).map (function (element,idx,arr) {
  return element.title;
});
console.log (middleFilter);
document.getElementById("answer2").innerHTML=middleFilter;

//answer 3
var gbpFilter = items.filter (function (element,idx,arr) {
  return element.currency_code === "GBP"
}).map (function (element,idx,arr) {
  return element.title + ", " + element.price;
});
console.log (gbpFilter);
document.getElementById("answer3").innerHTML=gbpFilter;

//answer 4
var woodFilter = items.filter(function(element,idx,arr) {
  return element.materials.indexOf("wood") !== -1
}).map (function(element,idx,arr){
  return element.title;
});
console.log (woodFilter);
document.getElementById("answer4").innerHTML=woodFilter;

//answer 5
var eightPlus = items.filter(function(element,idx,arr){
  return element.materials.length >= 8;
}).map(function(element,idx,arr) {
  return element.title + ", " + element.quantity + ", " + element.materials;
});
console.log (eightPlus);
document.getElementById("answer5").innerHTML=eightPlus;

//answer 6
var manyItems = items.filter(function(element,idx,arr){
  return element.who_made === "i_did"
});
console.log (manyItems.length);
document.getElementById("answer6").innerHTML=manyItems.length;
