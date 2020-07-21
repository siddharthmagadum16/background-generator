var _ = require('lodash');
console.log(_);
arr=[1,2,3,4,5,6,4,4,7];
console.log('answer:',_.without(arr,5));
console.log("hi, test argument worked");

var color1= document.getElementById("color1");
var color2= document.getElementById("color2");
var body= document.getElementById("bdy");
var h3=document.querySelector("h3");

function setGradient(){
    body.style.background= "linear-gradient(to right, "+color1.value+","+color2.value+")";
    h3.textContent= body.style.background + ";";

}


color1.addEventListener("input",setGradient);
color2  .addEventListener("input",setGradient);