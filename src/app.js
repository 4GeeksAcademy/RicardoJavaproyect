import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



              //.0           1             2             3           4
let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'The birds', 'my daughter'];
let action = ['ate', 'peed', 'crushed', 'broke', 'Burn', 'drink'];
let what = ['my homework', 'my phone', 'the car','my code','vodka'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getrandomnumber(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}


function getrandom (anyArray){
let max = who.length -1;
let min = 0;
console.log(max, min, anyArray)
let random = getrandomnumber (min , max);
return anyArray[random];

}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector('#excuse').innerHTML = getrandom(who) + " " + getrandom(action) + " " + getrandom(what) + " " + getrandom(when)




};
